'use client';
import { useState, useEffect } from "react";

//3. interface를 사용하여 타입을 정의
interface Post {
    id: number;
    title: string;
}

export default function Home() {

    //2. useState에 타입을 정의
    const [posts, setPosts] = useState<{id:number, title:string}[]>([]);
    
    useEffect(() => { 
        //컴포넌트가 실행되자마자 실행되는 함수, 
        // 그뒤로는 실행되지 않아서 두번째 인자로 빈 배열을 넣어줌
        
        fetch("http://localhost:8080/api/v1/posts")
        //fetch코드는  spring 58강 참고
        .then(response => response.json())
        .then(data => { 
            console.log(data)

            //1&3 setPosts에 타입을 정의
            setPosts(data as Post[]);
        });
    }, []); 


    return (
       
            <ul> 
        {posts.length==0 ? (
            <li>Loading...</li>
        ):(
                    posts.map((post) => (
                    <li key={post.id} className="p-2">
                        {post.title}
                    </li>
                ))
        )}
            </ul>
    )
}