import { useState } from 'react'
import {
  Globe2, MessageCircle, Users, Bell, Search, Heart, MessageSquare,
  Share2, Image, Video, MapPin, Send, Menu, X, UserPlus
} from 'lucide-react'

const posts = [
  {
    id: 1,
    name: 'Amina',
    country: 'Kenya',
    flag: '🇰🇪',
    time: '12 min ago',
    text: 'Hello everyone! I am excited to meet people from different countries and learn about new cultures. 🌍',
    likes: 128,
    comments: 24,
  },
  {
    id: 2,
    name: 'Daniel',
    country: 'Brazil',
    flag: '🇧🇷',
    time: '38 min ago',
    text: 'What is one thing visitors should experience in your country? Share your best local recommendation below!',
    likes: 94,
    comments: 31,
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [liked, setLiked] = useState({})
  const [composer, setComposer] = useState('')

  const toggleLike = (id) => {
    setLiked((current) => ({ ...current, [id]: !current[id] }))
  }

  return (
    <div className="app">
      <header className="topbar">
        <div className="brand">
          <div className="brand-icon"><Globe2 size={24} /></div>
          <div>
            <strong>Connect Abroad</strong>
            <span>People. Cultures. Connections.</span>
          </div>
        </div>

        <div className="search">
          <Search size={18} />
          <input placeholder="Search people, countries, groups..." />
        </div>

        <nav className="top-actions">
          <button title="Messages"><MessageCircle /></button>
          <button title="Notifications"><Bell /></button>
          <button className="avatar">DH</button>
        </nav>

        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <div className="layout">
        <aside className={menuOpen ? 'sidebar open' : 'sidebar'}>
          <div className="profile-card">
            <div className="profile-avatar">DH</div>
            <div>
              <strong>My Profile</strong>
              <span>🌍 Global explorer</span>
            </div>
          </div>

          <div className="side-nav">
            <a className="active"><Globe2 /> Global Feed</a>
            <a><Users /> Friends</a>
            <a><MessageCircle /> Messages</a>
            <a><Bell /> Notifications</a>
            <a><UserPlus /> Discover People</a>
          </div>

          <div className="countries">
            <p>Explore countries</p>
            <span>🇰🇪 Kenya</span>
            <span>🇧🇷 Brazil</span>
            <span>🇯🇵 Japan</span>
            <span>🇬🇧 United Kingdom</span>
            <span>🇨🇦 Canada</span>
          </div>
        </aside>

        <main className="feed">
          <section className="hero">
            <div>
              <span className="eyebrow">GLOBAL COMMUNITY</span>
              <h1>Meet the world.<br /><em>Connect anywhere.</em></h1>
              <p>Discover people, cultures and communities from around the world — all in one place.</p>
            </div>
            <div className="hero-orbit">🌍</div>
          </section>

          <section className="composer card">
            <div className="composer-row">
              <div className="small-avatar">DH</div>
              <input
                value={composer}
                onChange={(e) => setComposer(e.target.value)}
                placeholder="What's happening around the world?"
              />
              <button className="post-btn" onClick={() => setComposer('')}>Post</button>
            </div>
            <div className="composer-tools">
              <button><Image /> Photo</button>
              <button><Video /> Video</button>
              <button><MapPin /> Location</button>
            </div>
          </section>

          <div className="section-title">
            <h2>Global Feed</h2>
            <button>Latest ▾</button>
          </div>

          {posts.map((post) => (
            <article className="card post" key={post.id}>
              <div className="post-head">
                <div className="post-avatar">{post.name[0]}</div>
                <div className="post-author">
                  <strong>{post.name} <span>{post.flag}</span></strong>
                  <span>{post.country} · {post.time}</span>
                </div>
                <button className="more">•••</button>
              </div>
              <p className="post-text">{post.text}</p>
              <div className="post-stats">
                <span>❤️ {post.likes + (liked[post.id] ? 1 : 0)} likes</span>
                <span>{post.comments} comments</span>
              </div>
              <div className="post-actions">
                <button className={liked[post.id] ? 'liked' : ''} onClick={() => toggleLike(post.id)}>
                  <Heart /> Like
                </button>
                <button><MessageSquare /> Comment</button>
                <button><Share2 /> Share</button>
              </div>
              <div className="comment-box">
                <div className="small-avatar">DH</div>
                <input placeholder="Write a comment..." />
                <button><Send /></button>
              </div>
            </article>
          ))}
        </main>

        <aside className="rightbar">
          <section className="card discover">
            <div className="section-title"><h3>People to connect</h3><button>See all</button></div>
            {[
              ['Sofia', '🇵🇹', 'Portugal'],
              ['Ken', '🇯🇵', 'Japan'],
              ['Maya', '🇨🇦', 'Canada'],
            ].map(([name, flag, country]) => (
              <div className="person" key={name}>
                <div className="person-avatar">{name[0]}</div>
                <div><strong>{name} {flag}</strong><span>{country}</span></div>
                <button className="connect">+</button>
              </div>
            ))}
          </section>

          <section className="card countries-card">
            <h3>🌎 Trending countries</h3>
            <div className="country-row"><span>🇰🇪 Kenya</span><b>12.4K</b></div>
            <div className="country-row"><span>🇯🇵 Japan</span><b>9.8K</b></div>
            <div className="country-row"><span>🇧🇷 Brazil</span><b>8.7K</b></div>
          </section>
        </aside>
      </div>

      <footer>Connect Abroad 🌍 · Building a more connected world</footer>
    </div>
  )
}

export default App
