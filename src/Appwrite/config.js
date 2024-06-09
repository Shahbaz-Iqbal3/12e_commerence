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

	async createOrder({
		user_id,
		order_number,
		User_name,
		address,
		phone,
		email,
		no_of_items,
		date,
		price,
		payment_type,
		order_status,
		products,
	}) {
		try {
			return await this.databases.createDocument(
				conf.appwriteDatabaseId,
				conf.appwriteOrderCollectionId,
				order_number,
				{
					user_id,
					User_name,
					address,
					phone,
					email,
					price,
					payment_type,
					order_status,
					products,
				}
			);
		} catch (error) {
			console.log("Appwrite serive :: createOrder :: error", error);
		}
	}

	async updateOrder(order_number, { order_status }) {
		try {
			return await this.databases.updateDocument(
				conf.appwriteDatabaseId,
				conf.appwriteOrderCollectionId,
				order_number,
				{
					order_status,
				}
			);
		} catch (error) {
			console.log("Appwrite serive :: updateOrder :: error", error);
		}
	}


	async deleteOrder(slug) {
		try {
			await this.databases.deleteDocument(
				conf.appwriteDatabaseId,
				conf.appwriteOrderCollectionId,
				slug
			);
			return true;
		} catch (error) {
			console.log("Appwrite serive :: deletePost :: error", error);
			return false;
		}
	}

	async getOrder(slug) {
		try {
			return await this.databases.getDocument(
				conf.appwriteDatabaseId,
				conf.appwriteOrderCollectionId,
				slug
			);
		} catch (error) {
			console.log("Appwrite serive :: getPost :: error", error);
			return false;
		}
	}

	async getOrders(query = [Query.equal("user_id", "user_id")]) {
		try {
			return await this.databases.listDocuments(
				conf.appwriteDatabaseId,
				conf.appwriteOrderCollectionId,
				query
			);
		} catch (error) {
			console.log("Appwrite serive :: getPosts :: error", error);
			return false;
		}
	}

	// file upload service
    
	getFilePreview(fileId) {
		return this.bucket.getFilePreview(conf.appwriteBucketId, fileId);
	}
}

const service = new Service();
export default service;
