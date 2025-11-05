import CreatePost from "@/components/CreatePost"
import { collection, getDocs } from "firebase/firestore"
import { db } from "@/firebase"

async function page() {


  const posts = await getDocs(collection(db, "posts"))


  return (
    <div>
      <div>
        <CreatePost />
      </div>
      <ul>
        {posts.docs.map(p => <li>{p.data().post}</li>)}
      </ul>

    </div>
  )
}

export default page
