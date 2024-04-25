import { Client, Account, ID } from "react-native-appwrite";
import { appWriteConfig } from "./appWriteConfig";

// Init your react-native SDK
const client = new Client();

client
  .setEndpoint(appWriteConfig.endpoint) // Your Appwrite Endpoint
  .setProject(appWriteConfig.projectId) // Your project ID
  .setPlatform(appWriteConfig.platform) // Your application ID or bundle ID.

const account = new Account(client);

export const createUser = () => {
  // Register User
  account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
    .then(function (response) {
      console.log(response);
    }, function (error) {
      console.log(error);
    });
}
