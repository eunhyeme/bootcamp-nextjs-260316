'use ㅊlient'
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function Post() {
    const params = useParams<{id:string}>();
    const id = params.id;
    const [post, setPost] = useState<{id:number, title:string} | null>(null);
    useEffect(() => {
        fetch(`http://localhost:8080/api/v1/posts/${id}`)
        .then(response => response.json())
        .then(data => {console.log(data);
            setPost(data);
        });
    }, []);
}