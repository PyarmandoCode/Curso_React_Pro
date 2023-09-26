
import { Fragment } from "react"

export default function Blog() {
    return (
        <>
            <Post title="Como Instalar React sin Problemas" body="Si quieres crear una aplicación o un sitio web completamente con React, inicia un nuevo proyecto React." />

            <Post title="Como Empezar con React " body="Si quieres crear una aplicación o un sitio web completamente con React, inicia un nuevo proyecto React." />
        </>
    )
}

function Post({ title, body }) {
    return (
        <Fragment>
            <PostTitle title={title}></PostTitle>
            <PostBody body={body}></PostBody>
        </Fragment>
    )
}

function PostTitle({ title }) {
    return (
        <h1>
            {title}
        </h1>
    )
}


function PostBody({ body }) {
    return (
        <article>
            <p>{body}</p>
        </article>
    )
}