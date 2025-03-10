import React, { useState, useEffect, useRef } from 'react';

const styles = {
  body: {
    width: '120vw'
  },
  container: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#000',
    zIndex: 9999,
    overflow: 'hidden',
  },
  bootScreen: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#00ff00',
    opacity: 0,
    transition: 'opacity 0.1s ease',
    pointerEvents: 'none',
  },
  bootSequence: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#00ff00',
    fontFamily: 'monospace',
    fontSize: '24px',
    textAlign: 'center',
    opacity: 0,
    animation: 'fadeInOut 2s ease',
  },
  scanline: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '2px',
    backgroundColor: 'rgba(0, 255, 0, 0.1)',
    animation: 'scanline 6s linear infinite',
    pointerEvents: 'none',
  },
  terminal: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    color: '#00ff00',
    fontFamily: 'monospace',
    fontSize: '16px',
    padding: '20px',
    boxSizing: 'border-box',
    overflow: 'auto',
    opacity: 0,
    transition: 'opacity 1s ease',
  },
  content: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  output: {
    flexGrow: 1,
    overflowY: 'auto',
    overflowX: 'hidden',
    marginBottom: '20px',
    paddingRight: '10px',
    wordWrap: 'break-word',
    overflowWrap: 'break-word',
    whiteSpace: 'pre-wrap',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 0 20px 0',
    borderBottom: '1px solid rgba(0, 255, 0, 0.2)',
    marginBottom: '20px',
  },
  input: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#00ff00',
    fontFamily: 'monospace',
    fontSize: '16px',
    flex: 1,
    outline: 'none',
    padding: '10px',
    boxShadow: '0 0 15px rgba(0, 255, 0, 1)',
    transition: 'box-shadow 0.3s ease',
  },

  imageContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px',
  },
  image: {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain',
  },

  asciiArt: {
    whiteSpace: 'pre', 
    fontSize: '1.2rem', 
    textAlign: 'center', 
    lineHeight: '1.5', 
    overflowX: 'auto',
    display: 'block', 
  },

};

const TerminalAnimation = () => {
  const [booted, setBooted] = useState(false);
  const [bootPhase, setBootPhase] = useState(0);
  const [output, setOutput] = useState([]);
  const [input, setInput] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const outputEndRef = useRef(null); // For auto-scrolling

  const bootSequence = async () => {
    for (let i = 0; i < 3; i++) {
      setBootPhase(1);
      await new Promise(r => setTimeout(r, 100));
      setBootPhase(0);
      await new Promise(r => setTimeout(r, 100));
    }

    const bootMessages = [
      "INITIALIZING BOOT SEQUENCE",
      "LOADING ACM CORE SYSTEMS",
      "ESTABLISHING NEURAL NETWORKS",
      "SYSTEM READY",
    ];

    for (const msg of bootMessages) {
      setBootPhase(2);
      setOutput([msg]);
      await new Promise(r => setTimeout(r, 200));
    }

    setBootPhase(3);
    await new Promise(r => setTimeout(r, 500));
    setBooted(true);

    setOutput([
      `  
   █████╗  ██████╗███╗   ███╗
  ██╔══██╗██╔════╝████╗ ████║
  ███████║██║     ██╔████╔██║
  ██╔══██║██║     ██║╚██╔╝██║
  ██║  ██║╚██████╗██║ ╚═╝ ██║
  ╚═╝  ╚═╝ ╚═════╝╚═╝     ╚═╝
  `,
      "=== SYSTEM INITIALIZED ===",
      "",
      "Type 'start' to begin your journey...",
    ]);
  };

  useEffect(() => {
    bootSequence();
  }, []);

  useEffect(() => {
    if (outputEndRef.current) {
      outputEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [output]);

  const handleCommand = (cmd) => {
    cmd = cmd.trim().toLowerCase();
    switch (cmd) {
      case 'start':
        return [
    `  ┌───────────────────────────────┐
  │ 🌌 WELCOME TO ACM TERMINAL 🌌│
  └───────────────────────────────┘
    
   ───────────────────────────────
    ✨ COMMAND MENU ✨ 
   ───────────────────────────────
📂 visit  → 🌐 ACM NMAMIT website
👥 team   → Meet our amazing team
📅 events → Upcoming events
🧹 clear  → Clean the terminal screen
    
    
    💡 Tip: Type "help" anytime for guidance!
    `
        ];
      case 'visit':
        window.open('https://nmamit.acm.org/', '_blank');
        return [
          "🌐 Opening the ACM NMAMIT website in a new tab...",
          "💡 If it doesn't open, visit the link manually."
        ];
      case 'team':
        window.open('https://nmamit.acm.org/members', '_blank');
        return [
          "👥 Opening the team page...",
          "💡 Meet our amazing members!"
        ];
      case 'events':
        return [
          "📅 UPCOMING EVENTS:",
          "- Manual Testing & Resume Writing 8th March 2025"
        ];
      case 'clear':
        setOutput([]);
        return [];
      case 'help':
        return [
    `✨ AVAILABLE COMMANDS ✨
- 🌌 'start': Show welcome message
- 📂 'visit': ACM NMAMIT website link
- 👥 'team': Learn about our team
- 📅 'events': View upcoming events`
        ];
      default:
        return ["❓ Unknown command. Type 'help' for guidance."];
      }
    };    

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setOutput(prev => [...prev, `>  ${input}`]);
    const result = handleCommand(input);
    setOutput(prev => [...prev, ...result]);
    setInput('');
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <div
          style={{
            ...styles.bootScreen,
            opacity: bootPhase === 1 ? 0.8 : 0,
          }}
        />

        {bootPhase === 2 && (
          <div style={styles.bootSequence}>{output[0]}</div>
        )}

        <div style={{ ...styles.terminal, opacity: booted ? 1 : 0 }}>
          <div style={styles.scanline} />
          <div style={styles.content}>
            <div style={styles.header}>
              <div>ACM TERMINAL OS v3.0</div>
              <div>STATUS: ACTIVE</div>
            </div>

            <div style={styles.output}>
              {output.map((line, i) => (
                <div
                  key={i}
                  style={
                    line.includes('████') ? styles.asciiArt : { marginBottom: '8px', whiteSpace: 'pre-wrap' }
                  }
                >
                  {line}
                </div>
              ))}
              <div ref={outputEndRef} /> {/* Auto-scroll target */}
            </div>

            <form
              onSubmit={handleSubmit}
              style={{
                display: 'flex',
                alignItems: 'center',
                marginTop: '10px',
              }}
            >
              <span style={{ marginRight: '10px' }}>{'>'}</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                style={{
                  ...styles.input,
                  ...(isFocused ? styles.inputFocus : {}),
                }}
                autoFocus
              />
            </form>
          </div>
        </div>
      </div>


      <style>
        {`
          @keyframes fadeInOut {
            0%, 100% { opacity: 0; }
            50% { opacity: 1; }
          }
          @keyframes scanline {
            0% { transform: translateY(0); }
            100% { transform: translateY(100vh); }
          }

          @media (max-width: 768px) {
          body{
          overflow:hidden;
          }
            .container {
              width: 100%;
              overflow-x: hidden;
            }

            .terminal {
              padding: 15px;
              font-size: 14px; 
            }

            .header {
              padding: 5px 0;
            }

            .input {
              font-size: 14px;
            }
            .asciiArt {
      font-size: .8rem; /* Smaller font size for narrow screens */
      line-height: 1.1; /* Adjust line spacing */
    }

         .output div {
      word-wrap: break-word;
      overflow-wrap: break-word;
      white-space: pre-wrap; 
    }

            .bootSequence {
              font-size: 18px; 
            }
          }

          @media (max-width: 480px) {
    .asciiArt {
      font-size: 0.8rem; /* Even smaller for very small screens */
      line-height: 1; /* Compact line spacing */
    }
  }
        `}
      </style>
    </div >
  );
};

export default TerminalAnimation;
