import { buildSchema } from 'graphql';

module.exports = buildSchema(`


    type Message{
        _id: ID!
        message: String!,
    }
    type SignUp{
        _id:String!
        username:String!
        email:String!
        password:String!

    }

    input signUpInput{
        username:String!
        email:String!
        password:String!
        comfirmPassword:String!

    }
    input UnsubsribeInput{
        _id:String!
    }

    type RootMutation{
        SignUp(signUpData: signUpInput): SignUp!
    }

    type RootQuery {
        dummy: String
      }


    schema{
        mutation: RootMutation
        query : RootQuery
        
    }



`);
