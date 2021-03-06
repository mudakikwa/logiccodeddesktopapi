import { buildSchema } from 'graphql';

module.exports = buildSchema(`


    type Message{
        _id: ID!
        message: String!,
    }
    type SignUp{
        _id:String!
        fullname:String!
        username:String!
        email:String!
        password:String!
        token:String!
        tokenExpiration:String!
    }
    type FeedBack{
        _id:String!
        feedback:String!
        userId:String!
    }
    type Rating{
        _id:String!
        rating:String!
        userId:String!
    }

    type Code{
        _id:String!
        title:String!
        description:String!
        code:String!
    }
    
    type Ads{
        _id:String!
        link:String!
    }
    input signUpInput{
        fullname:String!
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

    input feedBackInput{
        feedback:String!
        userId:String!
    }
    input ratingInput{
        rating:String!
        userId:String!
    }
    input adsInput{
        link:String!
    }

    type RootMutation{
        SignUp(signUpData: signUpInput): SignUp!
        Login(loginData: loginInput): SignUp!

        AddCode(codeData:addCodeInput):Code!
        UpdateCode(codeData:updateCodeInput):Code!
        DeleteCode(codeData:deleteCodeInput):Message!

        AddFeedBack(feedBackData:feedBackInput):FeedBack!

        AddRating(ratingData: ratingInput): Rating!

        AddAds(adsData:adsInput):Ads
    }

    type RootQuery {
        dummy: String
        AllCode:[Code!]!
        AllAds:[Ads!]!
      }


    schema{
        mutation: RootMutation
        query : RootQuery
        
    }



`);
