const conf = {
     appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
     appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
     appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
     appwriteOrderCollectionId: String(import.meta.env.VITE_APPWRITE_O_COLLECTION_ID),
     appwriteProductCollectionId: String(import.meta.env.VITE_APPWRITE_P_COLLECTION_ID),
     appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
     tinyApiKey: String(import.meta.env.VITE_TINY_APIKEY),
 }
 // there was a name issue with the import.meta.env.VITE_APPWRITE_URL, it was later fixed in debugging video
 
 export default conf