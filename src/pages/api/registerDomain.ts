import Cors from "cors";
import { initMiddleware } from "@/utils";
import { db } from "../../../firebase";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import type { NextApiRequest, NextApiResponse } from "next";

// Initialize the cors middleware
const cors = initMiddleware(
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ["POST"],
    // Allow requests from any origin
    origin: "*", // Adjust this to be more restrictive if necessary
  })
);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Run the middleware
  await cors(req, res);
  if (req.method === "POST") {
    const { domain, created } = req.body;
    try {
      // Connect to the Firestore collection
      const domainsRef = collection(db, "domains");
      // Create a query to check if the domain already exists
      const q = query(domainsRef, where("name", "==", domain));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        // Domain doesn't exist, proceed to add
        await addDoc(domainsRef, {
          name: domain,
          created: new Date(created).toISOString(),
        });

        res.status(200).json({ message: "Document successfully written!" });
      } else {
        // Domain already exists, send a conflict response
        res.status(409).json({ message: "Domain already exists." });
      }

      res.status(200).json({ message: "Document successfully written!" });
    } catch (error) {
      console.error("Error writing document: ", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    // Handle any requests that aren't POST
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
