import { buildSchema } from 'graphql';

module.exports = buildSchema(`


    type User{
        _id: ID!
        firstname: String!,
        lastname: String!,
        username : String!,
        password: String
    }

    type AdminAuthData{
        role:String!
        Admin_Username:String!
        token : String!
    }

    input AdminInput{
        username : String!,
        password: String!       
    }

    input UserInput{
        firstname: String!,
        lastname: String!,
        username : String!,
        password: String!       
    }

    type RootMutation{
        CreateUser(userInput: UserInput): User!
        AdminLogin(adminInput: AdminInput): AdminAuthData!
    }

    type RootQuery {
        dummy: String
      }


    schema{
        mutation: RootMutation
        query : RootQuery
        
    }



`);
