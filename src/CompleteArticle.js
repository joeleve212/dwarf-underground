import React from 'react'

import AuthorInfo from './AuthorInfo';
import Paragraphs from './Paragraphs';
import ArticleLinks from './ArticleLinks';

const CompleteArticle = () =>{
    return(
        <div className="large-8 medium-12 columns article">
        <h2 className="article-title">Gold Madness - Fact or Fiction?</h2>
        <AuthorInfo />
        <Paragraphs />
        <ArticleLinks />
      </div>
    );
}
export default CompleteArticle