import { db } from "../../../firebase";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import type { NextApiRequest, NextApiResponse } from "next";

type Handler = (req: NextApiRequest, res: NextApiResponse) => Promise<void>;

const allowCors =
  (fn: Handler) => async (req: NextApiRequest, res: NextApiResponse) => {
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    // another common pattern
    // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET,OPTIONS,PATCH,DELETE,POST,PUT"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
    );
    if (req.method === "OPTIONS") {
      res.status(200).end();
      return;
    }
    return await fn(req, res);
  };

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log(1);
  if (req.method === "POST" || req.method === "OPTIONS") {
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
};

export default allowCors(handler);
