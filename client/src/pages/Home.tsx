import { ArrowDown, ArrowRight, Check, ChevronDown, LockKeyhole, Sparkles } from "lucide-react";
import { useState } from "react";

const CHECKOUT_URL = "https://whop.com/checkout/plan_dou7x6yRJsHis";
const PORTRAIT = "/manus-storage/Elderly_woman_seated_in_armchair_2K_20260921135946_1cc18b9c.webp";

const familiar = [
  "You have replayed one text message so many times that you know every word.",
  "You have explained away the same disappointing pattern and called it understanding.",
  "You keep reminding, planning, and prompting someone into looking thoughtful.",
  "You are waiting for someone to become the person you already described to your friends.",
  "You know, somewhere, what the pattern is saying. You just have not let yourself believe it yet.",
];

const inside = [
  ["Words versus actions", "How to separate a promise from a behavior that is actually sustained."],
  ["The pattern, not the panic", "How context, repetition, and impact give a clearer picture than one charged moment."],
  ["Boundaries and repair", "What to look for after a difficult conversation, an injury, or a broken agreement."],
  ["The Ten-Question Check-In", "A simple framework for naming what you know and deciding what needs attention next."],
];

const faqs = [
  ["Is this therapy or professional advice?", "No. This is an educational book about reflection, communication, patterns, and boundaries. It is not therapy, a diagnosis, legal advice, or medical advice."],
  ["Is this an anti-men book?", "No. The book does not treat every man or every relationship as the same. It asks you to notice both good faith and repeated harm with the same clarity."],
  ["What format do I receive?", "You receive a digital PDF designed to read comfortably on a phone, tablet, or computer."],
  ["How long is the book?", "It is a short book with fifteen chapters, an opening letter, a ten-question check-in, and a closing reflection. It is made to finish in an evening and return to when needed."],
  ["Who is Evelyn Sterling?", "Evelyn Sterling is the editorial persona and pen name for this project. The book is transparent about that and does not claim a fictional personal history as fact."],
];

function CTA({ label = "Get the book", className = "" }: { label?: string; className?: string }) {
  return (
    <a className={`cta ${className}`} href={CHECKOUT_URL} target="_blank" rel="noreferrer">
      {label}
      <ArrowRight size={17} strokeWidth={1.8} />
    </a>
  );
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="site-shell">
      <div className="topline">A short book for the moment when you are ready to see clearly.</div>

      <header className="nav wrap">
        <a className="wordmark" href="#top" aria-label="When Patterns Speak home">
          <span className="wordmark-mark">E</span>
          <span>When Patterns Speak</span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#inside">Inside the book</a>
          <a href="#about">About Evelyn</a>
          <a href="#faq">Questions</a>
        </nav>
        <CTA label="Get the book · $9.99" className="nav-cta" />
      </header>

      <main id="top">
        <section className="hero wrap">
          <div className="hero-copy">
            <p className="eyebrow"><Sparkles size={14} /> A book about patterns, not paranoia</p>
            <h1>When <em>patterns</em> speak, you do not have to keep explaining them away.</h1>
            <p className="hero-deck">A clear, compassionate guide to words, actions, boundaries, and the quiet moment when your own perception deserves to be heard.</p>
            <div className="hero-actions">
              <CTA label="Get the book · $9.99" />
              <a className="text-link" href="#inside">See what is inside <ArrowDown size={15} /></a>
            </div>
            <p className="delivery"><Check size={15} /> Instant digital PDF · Read on any device · Yours to keep</p>
          </div>
          <div className="hero-portrait">
            <div className="portrait-frame">
              <img src={PORTRAIT} alt="Evelyn Sterling seated in an elegant room" />
              <div className="portrait-caption"><span>Evelyn Sterling</span><span>Editorial voice</span></div>
            </div>
            <p className="portrait-note">“Clarity is not absolute certainty. It is a more honest relationship with what you see, feel, ask, and decide.”</p>
          </div>
        </section>

        <section className="section paper-section familiar wrap-wide">
          <div className="section-intro narrow">
            <p className="eyebrow">Start here</p>
            <h2>Tell me if any of this feels familiar.</h2>
            <p>If it does, you are not asking for too much. You may simply be ready for a clearer way to look at what keeps happening.</p>
          </div>
          <div className="familiar-grid">
            {familiar.map((item, index) => (
              <div className="familiar-card" key={item}>
                <span className="card-number">0{index + 1}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section dark-section">
          <div className="wrap split-section">
            <div className="dark-lead">
              <p className="eyebrow warm">The central idea</p>
              <h2>This is not a book about catching someone.</h2>
              <div className="rule" />
            </div>
            <div className="dark-body">
              <p>It is about the habit of noticing something true, then explaining it away before it can finish showing you what it means.</p>
              <p>One late text does not define a relationship. One defensive moment does not prove a lie. But repeated behavior deserves context, honest conversation, and a place in your decision.</p>
              <p><strong>When Patterns Speak</strong> gives you a calmer lens: observe the pattern, ask a better question, and decide without abandoning yourself.</p>
            </div>
          </div>
        </section>

        <section className="section wrap" id="inside">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">Inside the book</p>
              <h2>Short enough to finish.<br /><em>Useful enough to return to.</em></h2>
            </div>
            <p className="section-aside">Fifteen honest chapters, one practical check-in, and no padded pages pretending to be wisdom.</p>
          </div>
          <div className="inside-grid">
            {inside.map(([title, copy], index) => (
              <article className="inside-card" key={title}>
                <span className="inside-index">{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
          <div className="chapter-line"><span>Also included</span><strong>Emotional safety · Reciprocity · Exes and transparency · Potential versus reality · Repair · Identity · Next steps</strong></div>
        </section>

        <section className="section quote-section">
          <div className="wrap quote-wrap">
            <div className="quote-mark">“</div>
            <blockquote>You do not have to prove that your perception was correct. You can use what you have learned to live more honestly.</blockquote>
            <p>— Evelyn Sterling, <em>When Patterns Speak</em></p>
          </div>
        </section>

        <section className="section wrap about-section" id="about">
          <div className="about-image"><img src={PORTRAIT} alt="Evelyn Sterling" /></div>
          <div className="about-copy">
            <p className="eyebrow">Meet the editorial voice</p>
            <h2>A quieter kind of authority.</h2>
            <p>Evelyn Sterling is the pen name and editorial persona behind this project. She is not presented as a therapist, clinician, or an invented witness to every story in the book.</p>
            <p>Her role is simpler: to give language to the questions many women ask privately when words and actions stop matching.</p>
            <div className="signature">Evelyn Sterling</div>
          </div>
        </section>

        <section className="section wrap fit-section">
          <div className="fit-column fit-yes">
            <p className="eyebrow">This is for you if</p>
            <h2>You want clarity more than drama.</h2>
            <ul>{[
              "You are tired of decoding mixed signals you would read plainly in someone else's relationship.",
              "You keep explaining away the same disappointing pattern.",
              "You want better questions, stronger boundaries, and a calmer next step.",
              "You still believe good relationships exist and want to recognize them more clearly.",
            ].map((item) => <li key={item}><Check size={17} />{item}</li>)}</ul>
          </div>
          <div className="fit-column fit-no">
            <p className="eyebrow">It is not for you if</p>
            <h2>You want a trick that controls someone else.</h2>
            <ul>{[
              "You want a guarantee that makes someone stay.",
              "You want permission to believe every person is the same.",
              "You want a label instead of a clearer way to observe.",
              "You are looking for a substitute for professional support.",
            ].map((item) => <li key={item}><span className="x-mark">×</span>{item}</li>)}</ul>
          </div>
        </section>

        <section className="section offer-section" id="get-the-book">
          <div className="wrap offer-card">
            <div className="offer-copy">
              <p className="eyebrow warm">Your next clear step</p>
              <h2>When Patterns Speak</h2>
              <p>A digital book for the moment when hope needs to make room for what the pattern is saying.</p>
              <div className="price">$9.99</div>
              <CTA label="Get your copy" />
              <div className="secure"><LockKeyhole size={15} /> Secure checkout by Whop · Instant digital delivery</div>
            </div>
            <div className="offer-mini-cover">
              <div className="mini-kicker">A short book by</div>
              <div className="mini-title">When<br /><em>Patterns</em><br />Speak</div>
              <div className="mini-author">Evelyn Sterling</div>
            </div>
          </div>
        </section>

        <section className="section wrap faq-section" id="faq">
          <div className="section-intro narrow">
            <p className="eyebrow">Before you decide</p>
            <h2>Questions, answered plainly.</h2>
          </div>
          <div className="faq-list">
            {faqs.map(([question, answer], index) => (
              <div className={`faq-item ${openFaq === index ? "is-open" : ""}`} key={question}>
                <button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}>
                  <span>{question}</span><ChevronDown size={19} />
                </button>
                {openFaq === index && <p>{answer}</p>}
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-inner">
          <div><span className="footer-mark">E</span><strong>When Patterns Speak</strong><p>By Evelyn Sterling · An original editorial project</p></div>
          <div className="footer-right"><CTA label="Get the book · $9.99" /><p>Educational content only. Not therapy, medical, legal, or clinical advice.</p></div>
        </div>
      </footer>
    </div>
  );
}
