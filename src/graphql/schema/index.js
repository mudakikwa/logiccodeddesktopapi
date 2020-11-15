import { buildSchema } from 'graphql';

module.exports = buildSchema(`


    type User{
        _id: ID!
        firstname: String!,
        lastname: String!,
        username : String!,
        password: String
    }

    input userinput{
        firstname: String!,
        lastname: String!,
        username : String!,
        password: String!       
    }

    type RootMutation{
        CreateUser(userinput:userinput): User!
    }

    type RootQuery {
        dummy: String
      }


    schema{
        mutation: RootMutation
        query : RootQuery
        
    }



`);
