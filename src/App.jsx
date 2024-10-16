import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import './global.css'
import styles from './App.module.css'


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/lucasceciliano.png',
      name: 'Lucas Ceciliano',
      role: 'Web & Mobile Developer'
    },

    content: [
      {type: 'paragraph', content:  'Fala galeraa 👋'},
      {type: 'paragraph', content:  'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content:  'jane.design/doctorcare'},
      
    ],

    publishedAt: new Date('2024-10-15 21:00:00')
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://images.unsplash.com/photo-1534119768988-c496213eff76?q=40&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Vitória Euzébio',
      role: 'Mobile Developer'
    },

    content: [
      {type: 'paragraph', content:  'Fala galeraa 👋'},
      {type: 'paragraph', content:  'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content:  'jane.design/doctorcare'},
      
    ],

    publishedAt: new Date('2024-10-15 22:00:00')
  },
]


function App() {
  return (
    <div>
    <Header />

    <div className={styles.wrapper}>
      <Sidebar />
      <main>
        {posts.map(post => {
          return (
          <Post
            key={post.id}
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
          />
        )
        })}
      </main>
    </div>

    </div>
  )
}

export default App
