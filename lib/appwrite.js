import { Client } from "react-native-appwrite";
import { appWriteConfig } from "./appWriteConfig";

// Init your react-native SDK
const client = new Client();

client
  .setEndpoint(appWriteConfig.endpoint) // Your Appwrite Endpoint
  .setProject(appWriteConfig.projectId) // Your project ID
  .setPlatform(appWriteConfig.platform) // Your application ID or bundle ID.
