async function fetchArticles(){
  const response = await fetch('http://localhost:3000/articles')
  const data = await response.json()
  return data;
}

const articles = await fetchArticles()

const articlesContainer = document.getElementById('articlesContainer')

articles.map(function(article){
    const articleContainer = document.createElement('div')
    const articleImage = document.createElement('img')
    const articleTitle = document.createElement('h3')
    const articleDescription = document.createElement('p')

    articleImage.src = article.image
    articleTitle.innerHTML = article.title
    articleDescription.innerHTML = article.description

    articleContainer.appendChild(articleImage)
    articleContainer.appendChild(articleTitle)
    articleContainer.appendChild(articleDescription)

    articlesContainer.appendChild(articleContainer)

})

