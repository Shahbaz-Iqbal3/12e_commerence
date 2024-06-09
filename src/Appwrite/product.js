import { data } from "autoprefixer";
import conf from "../conf/config.js";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
	client = new Client();
	databases;
	bucket;

	constructor() {
		this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);
		this.databases = new Databases(this.client);
		this.bucket = new Storage(this.client);
	}

	async createProduct({ product_id, title, price , disc_price , description , category , stoke, no_of_review, rating, image }) {
		try {
			return await this.databases.createDocument(
				conf.appwriteDatabaseId,
				conf.appwriteProductCollectionId,
				product_id,
				{ title, price , disc_price , description , category , stoke, no_of_review, rating, image }
			);
		} catch (error) {
			console.log("Appwrite serive :: createOrder :: error", error);
		}
	}

	async updateProduct(slug, { title, price, disc_price , description , category , stoke, no_of_review, rating, image }) {
		try {
			return await this.databases.updateDocument(
				conf.appwriteDatabaseId,
				conf.appwriteProductCollectionId,
				slug,
				{
					title,
					price,
					disc_price , description , category , stoke, no_of_review, rating, image 
				}
			);
		} catch (error) {
			console.log("Appwrite serive :: updatePost :: error", error);
		}
	}

	async deleteProduct(slug) {
		try {
			await this.databases.deleteDocument(
				conf.appwriteDatabaseId,
				conf.appwriteProductCollectionId,
				slug
			);
			return true;
		} catch (error) {
			console.log("Appwrite serive :: deletePost :: error", error);
			return false;
		}
	}

	async getProduct(slug) {
		try {
			return await this.databases.getDocument(
				conf.appwriteDatabaseId,
				conf.appwriteProductCollectionId,
				slug
			);
		} catch (error) {
			console.log("Appwrite serive :: getPost :: error", error);
			return false;
		}
	}

	async getProducts(queries = [Query.equal("status", "active")]) {
		try {
			return await this.databases.listDocuments(
				conf.appwriteDatabaseId,
				conf.appwriteProductCollectionId,
				queries
			);
		} catch (error) {
			console.log("Appwrite serive :: getPosts :: error", error);
			return false;
		}
	}

	// file upload service

	async uploadFile(file) {
		try {
			return await this.bucket.createFile(conf.appwriteBucketId, ID.unique(), file);
		} catch (error) {
			console.log("Appwrite serive :: uploadFile :: error", error);
			return false;
		}
	}

	async deleteFile(fileId) {
		try {
			await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
			return true;
		} catch (error) {
			console.log("Appwrite serive :: deleteFile :: error", error);
			return false;
		}
	}

	getFilePreview(fileId) {
		try {
			return  this.bucket.getFilePreview(conf.appwriteBucketId, fileId);
		} catch (error) {
			console.log("Appwrite serive :: getFilePreview :: error", error);
		}
		
	}
}

const service = new Service();
export default service;
