import React from 'react'
import articleContent from './article-content';
import ArticlesList from '../components/ArticlesList';

const ArticlePpage = ({ match }) => {
const name = match.params.name;
const article = articleContent.find(article => article.name === name);
const otherArticles = articleContent.filter(article => article.name !== name);


    return (
        <>
           <h1> {article.title} </h1>
           {article.content.map((paragraph,key) => (
           <p key={key}> {paragraph}</p>
           ))}
           <hr></hr>
           <h2>Other Articles</h2>
           <ArticlesList articles={otherArticles} />
        </>
    )
}

export default ArticlePpage;