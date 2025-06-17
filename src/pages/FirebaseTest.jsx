import React, { useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export default function FirebaseTest() {
  useEffect(() => {
    async function fetchData() {
      try {
        const querySnapshot = await getDocs(collection(db, "test"));
        querySnapshot.forEach((doc) => {
          console.log(doc.id, "=>", doc.data());
        });
      } catch (error) {
        console.error("Firebase fetch error:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Firebase Test Page</h1>
      <p>If you see this text, the component is rendering!</p>
    </div>
  );
}
