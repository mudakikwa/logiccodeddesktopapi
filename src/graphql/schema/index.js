import { buildSchema } from 'graphql';

module.exports = buildSchema(`


    type User{
        _id: ID!
        firstname: String!,
        lastname: String!,
        username : String!,
        password: String
    }

    input UserInput{
        firstname: String!,
        lastname: String!,
        username : String!,
        password: String!       
    }

    type RootMutation{
        CreateUser(userInput: UserInput): User!
    }

    type RootQuery {
        dummy: String
      }


    schema{
        mutation: RootMutation
        query : RootQuery
        
    }



`);
