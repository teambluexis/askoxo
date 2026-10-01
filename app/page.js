'use client';
import {useState} from 'react';
const topics=['Human','Astrology','Name Code','Festivals','Scriptures','Unknown','Psychology','OXO'];
const questions=[
 ['Does astrology really work?','Astrology'],['Why does my name affect my identity?','Name Code'],['What happens after death?','Unknown'],['Why do we celebrate Diwali?','Festivals'],['What does the Bhagavad Gita say about Karma?','Scriptures'],['What is consciousness?','OXO']
];
const views={
 'Does astrology really work?':[
 ['Evidence','Modern science has not established astrology as a reliable predictive system. Controlled tests have generally not shown consistent predictive accuracy.'],
 ['Tradition','Astrological traditions developed sophisticated symbolic systems for interpreting celestial patterns and human life. Millions continue to use them for reflection and cultural practice.'],
 ['Psychology','Personal meaning can arise through reflection, pattern recognition, expectation and the way broad descriptions are interpreted.'],
 ['Explore','A useful question is not only “Is astrology true?” but also “What kind of claim is being made—scientific, symbolic, cultural or personal?”']
 ],
 'Why does my name affect my identity?':[
 ['Psychology','Names can become social signals. Repeated ways of addressing a person may influence expectations, self-perception and behaviour.'],
 ['Society','A name may communicate language, generation, culture or social context, although those signals should not be treated as destiny.'],
 ['OXO Name Code','OXO Name Code explores the sequence Name → Signal → Perception → Identity → Behaviour → Reputation → Opportunity as a research framework, not numerology.'],
 ['Reflect','How do you behave differently when different people call you by different versions of your name?']
 ]
};
export default function Home(){const [q,setQ]=useState('');const [active,setActive]=useState(null);const ask=(x)=>{const v=(x||q).trim(); if(v)setActive(v)};return <main>
<header><div className="brand"><span>Ask</span><b>O<span className="x">X</span>O</b></div><nav><a href="#explore">Explore</a><a href="#principles">Our DNA</a><button>MyOXO</button></nav></header>
<section className="hero"><div className="halo"></div><p className="eyebrow">A FAMILY-SAFE WISDOM EXPLORER</p><h1>What would you like<br/>to <em>understand?</em></h1><p className="sub">Ask anything that matters. Explore different perspectives. Think for yourself.</p><div className="ask"><input value={q} onChange={e=>setQ(e.target.value)} onKeyDown={e=>e.key==='Enter'&&ask()} placeholder="Ask OXO..."/><button onClick={()=>ask()}>Ask →</button></div><p className="promise">One Question. Many Perspectives. Your Understanding.</p></section>
<section id="explore" className="wrap"><div className="sectionhead"><p>EXPLORE</p><h2>Follow your curiosity.</h2></div><div className="topics">{topics.map((t,i)=><button key={t}><span>{['◌','✦','Aa','◐','▤','∞','◎','OXO'][i]}</span>{t}</button>)}</div>
<div className="sectionhead row"><div><p>TRENDING QUESTIONS</p><h2>Questions worth asking.</h2></div><span>Curated, not clickbait.</span></div><div className="cards">{questions.map(([a,b],i)=><button className="card" key={a} onClick={()=>ask(a)}><small>{String(i+1).padStart(2,'0')} · {b}</small><strong>{a}</strong><span>Explore perspectives →</span></button>)}</div></section>
<section id="principles" className="principles"><p className="eyebrow">THE ASKOXO DNA</p><h2>Open minds. Clear distinctions.<br/>Human dignity.</h2><div className="pillars"><div><b>Pluralism</b><p>Many traditions and perspectives can be explored without forcing one belief.</p></div><div><b>Evidence</b><p>Fact, research, belief, tradition, interpretation and hypothesis are clearly distinguished.</p></div><div><b>Family Safe</b><p>Difficult realities can be explained with dignity—without vulgar or degrading content.</p></div></div></section>
<footer><div className="brand mini"><span>Ask</span><b>O<span className="x">X</span>O</b></div><p>Ask. Explore. Understand.</p><small>Created by AAROHITHA · Demo V0.5</small></footer>
{active&&<div className="overlay" onClick={()=>setActive(null)}><article onClick={e=>e.stopPropagation()}><button className="close" onClick={()=>setActive(null)}>×</button><p className="eyebrow">ONE QUESTION · MANY PERSPECTIVES</p><h2>{active}</h2><div className="answer">{(views[active]||[['AskOXO','This V0.5 demonstrates the experience. In the functional build, AskOXO will retrieve curated knowledge and reliable sources before constructing a multi-perspective answer.'],['Pluralism','The system will distinguish evidence, traditions, interpretations and OXO perspectives rather than collapsing them into one claimed truth.'],['Next question','What perspective would you like to explore first?']]).map(([k,v])=><div key={k}><b>{k}</b><p>{v}</p></div>)}</div><div className="follow"><input placeholder="Ask a deeper question..."/><button>Continue →</button></div><small>Demo content · Sources and live AI will be connected in the functional MVP.</small></article></div>}
</main>}