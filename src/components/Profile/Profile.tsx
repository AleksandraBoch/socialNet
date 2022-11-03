import React from "react";
import s from './Profile.module.css'
import {MyPosts, PostsDataType} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo";

type ProfilePropsType={
    postsData: Array<PostsDataType>
}

export const Profile = (props:ProfilePropsType) => {



    return (

        <div>
          <ProfileInfo/>
            <MyPosts postsData={props.postsData} />


        </div>


    )
}