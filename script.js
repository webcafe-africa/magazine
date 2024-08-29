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
    const articleTitle = document.createElement('a')
    const articleDescription = document.createElement('p')

    articleContainer.id = article.id
    articleContainer.classList.add('articleContainer')
    articleImage.src = article.image
    articleTitle.innerHTML = article.title
    articleTitle.classList.add('articleTitle')
    articleDescription.innerHTML = article.description

    articleTitle.addEventListener('click', () => displayArticle(article))

    articleContainer.appendChild(articleImage)
    articleContainer.appendChild(articleTitle)
    articleContainer.appendChild(articleDescription)

    articlesContainer.appendChild(articleContainer)

})

function displayArticle(article){
  const articlesContainers = document.querySelectorAll('.articleContainer')
  articlesContainers.forEach(container => {
    if(container.id !== article.id){
      container.classList.toggle('hidden')
    }
  })
}

const articleForm = document.getElementById('articleForm')

articleForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const title = e.target.title.value
  const image= e.target.image.value
  const description = e.target.description.value

  fetch('http://localhost:3000/articles', {
    method: 'POST',
    body: JSON.stringify({
      title: title,
      image: image,
      description: description
    })
  })
  .then(response => response.json())
  .then(data => {
    // articleForm.classList.add('hidden')
    console.log(data)
  })


})

