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

    type Code{
        _id:String!
        title:String!
        description:String!
        code:String!
    }

    input signUpInput{
        username:String!
        email:String!
        password:String!
        comfirmPassword:String!

    }

    input loginInput{
        email:String!
        password:String!
    }

    input addCodeInput{
        title:String!
        description:String!
        code:String!
    }
    input updateCodeInput{
        _id:String!
        title:String!
        description:String!
        code:String!
    }
    input deleteCodeInput{
        _id:String!
    }

    input UnsubsribeInput{
        _id:String!
    }

    type RootMutation{
        SignUp(signUpData: signUpInput): SignUp!
        Login(loginData: loginInput): SignUp!

        AddCode(codeData:addCodeInput):Code!
        UpdateCode(codeData:updateCodeInput):Code!
        DeleteCode(codeData:deleteCodeInput):Message!
    }

    type RootQuery {
        dummy: String
        AllCode:[Code!]!
      }


    schema{
        mutation: RootMutation
        query : RootQuery
        
    }



`);
