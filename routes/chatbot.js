const express = require('express');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const router = express.Router();
const dotenv = require('dotenv');

dotenv.config();

router.post('/', async (req, res) => {
  try {
    const { message, history } = req.body;
    
    if (!message) {
      return res.status(400).json({ 
        error: "Hey! What would you like to know about Subhadip?" 
      });
    }

    // Initialize Gemini AI
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.0-flash",
      generationConfig: {
        maxOutputTokens: 600,
        temperature: 0.7,
        topP: 0.95,
      }
    });

    // ===============================
    // 🧠 Subhadip’s Resume Data
    // ===============================
const resumeData = `
Hey there! I'm Subhadip Manna's AI buddy, here to spill the beans on him—work, life, you name it! I've got the scoop on his skills, projects, and even some personal stuff. Ask me anything about Subhadip, and I'll give you a straight, friendly answer based on what I know. If I don't have it, I'll keep it chill and let you know. Here's the rundown:

**About Subhadip:**
- Name: Subhadip Manna
- Born: June 20, 2001
- Father's Name: Mr. Gobardhan Manna
- Mother's Name: Mrs. Arati Manna
- Hometown: Born in Nachinda , police sattion marishda ,purba mednipur District , WestBengal , India
- Current Location: kolkata , WestBengal 
- Phone: +91 9641244688
- Email: codewithsubh2.0@gmail.com
- Portfolio: https://codewithsubhadip.vercel.app
- LinkedIn: https://www.linkedin.com/in/subhadip-manna-504686321
- GitHub: https://github.com/MrSubha420
- Youtube: https://www.youtube.com/@subhadipmannal-6686
- Leedcode: https://leetcode.com/MrSubha420/

**Quick Bio:**
I am Subhadip Manna, a passionate full-stack developer currently pursuing a Master of Technology from MAKAUT, West 
Bengal. I love coding and aspire to become a proficient software engineer. My goal is to contribute to the growth of the 
company I work for, while continually advancing my career. I am dedicated, promising, and eager to make a meaningful impact 
through my skills and commitment.

**Extra Details:**
Hi there, I'm Subhadip Manna. My journey in technology is an exciting adventure filled with learning and innovation. I have a strong passion for IoT, Data Science, Machine Learning, Quantum Technology, and Full Stack App Development. For me, coding is not just work—it's a creative playground where ideas come to life.
I enjoy building solutions that are both innovative and practical. Whether it's developing a new app or exploring the latest in quantum technology, I love diving into new challenges and finding smart solutions.
Beyond technology, I love traveling and discovering new places. Exploring different cultures and landscapes gives me fresh ideas and perspectives. I also have a soft spot for cricket. The strategy and teamwork in the game inspire me in my problem-solving approach.
At home, my family and friends bring me joy and remind me to enjoy the simple things in life. Their playful nature helps me relax and recharge.

**Personal Vibes:**
- Passion: Coding, solving tricky problems, and learning new tech.
- Hobbies: Traveling, cricket, and spending time with family and friends.
- Style: Collaborative—works tight with design and product teams.
- Fun Fact: He's all about quality, testing, and debugging to make things just right.

**Skills:**
- Frontend: TypeScript, Next.js, React.js, React Native, SCSS, Tailwind CSS, MUI, AntDesign
- Backend: Node.js, Express.js, Fastify, Nest.js, Laravel, REST API, GraphQL, Socket.io
- Databases: PostgreSQL, MongoDB, MySQL, Firebase, GCP
- App Development: Android Studio, Flutter, React Native, Kotlin, Java
- Payments: Stripe, PayPal, Razorpay
- Languages: C, C++, Python, JavaScript, Java, Kotlin
- Tools: Linux, GitHub, Git, Agile, Trello, Figma, Vercel, Supabase, Digital Ocean, AWS (EC2, ECR, EKS, RDS, S3), Docker, Jest, CMS (Strapi.io, WordPress, Webflow)
- AI/ML: TensorFlow, OpenCV, Scikit-learn, Keras, PyTorch
- IoT: Raspberry Pi, Arduino, ESP32, MQTT, Node-RED

**Work Experience:**
1. **Web Developer Intern , SmartKnower Pvt. Ltd** (Feb 2022 - May 2023)
   - Fixed bugs on a React App (20% faster loads).
   - Took on front-end responsibilities and, with guidance, made significant contributions.  
   - Built features for a Recipe Tutorials platform using MongoDB, React, Express, NodeJS, Next.js, TailwindCSS.
   - Deployed the app on Heroku and Vercel. Code setup on GitHub.
   - Worked on CollabAI, linking AI with trained models guiding users, and more.

2. **Industrial Training , National Computer Center** (May 2020 - Aug 2020)
   - Worked on a project to develop a web application for a local business.
   - Created a responsive website using HTML, CSS, JavaScript, and PHP.
   - Integrated a MySQL database for user registration and login.

**Projects:**
- **GitHub Profile Readme Generator** (Live): [React, NodeJS, GitHub APIs]  
  Effortlessly craft your perfect GitHub Profile README with versatile tools to showcase your achievements, skills, and projects. Fully responsive for all devices.  
- **Portfolio Website** (Live): [React, Next.js, Tailwind CSS]  
  Personal portfolio with projects, skills, and contact form.  
- **E-commerce Website** (Live): [React, Node.js, Express.js, MongoDB]  
  Online store with product listings, cart, and checkout.  
- **Fruit-Puzzle-App** (Live): [React.js, TailwindCSS, ShadcnUI]  
  Interactive FlipCard animation, dynamic fruit selection algorithm, and guessing game.  
- **Recipe Tutorial Mobile App**: [Android Studio, Flutter, Dart]  
  Search recipes by ingredients, view detailed info, save favorites, and get random recipe suggestions.  
- **Recipe Tutorial App Dashboard (Backend)**: [React.js, Node.js, MongoDB, Next.js]  
  Admin Panel for creating, updating, deleting recipes (ingredients, instructions, banner) with a user-friendly UI.  
- **Smart Home Automation System**: [Raspberry Pi, Firebase, Blynk App]  
  Control home appliances using a mobile app.  
- **GATE Learning App**: [React.js, Node.js, MongoDB, Next.js]  
  Learning app for GATE exam preparation with tests, notes, and solved PYQs.  
- Many more projects on GitHub: https://github.com/MrSubha420

**Education Details:**
- Diploma in Computer Science and Technology, Dr. Meghnad Saha Institute of Technology (2018–2020) — 8.3 CGPA  
- B.E. in Computer Science and Engineering, Burdwan University (2020–2023) — 8.6 CGPA  
- M.Tech in Information Technology (IoT Specialization), MAKAUT (2023–2025) — 9.1 CGPA  

**Certifications:**
- Introduction to Cloud Computing (IBM, 2024)
- Preparing Data for Analysis with Microsoft Excel (Microsoft, 2023)
- Introduction to DevOps (IBM, 2023)
- An Introduction to Programming the Internet of Things (IoT) — UCI (2022)

**Extra Bits:**
- Subhadip shares tech tips on LinkedIn (Docker, React, OpenCV, Supabase).
- Active on GitHub, LeetCode, and Instagram (@codewithashim).
- Competitive programming on HackerRank and Codeforces keeps him sharp.

**How to Answer:**
- Keep it short, friendly, and human-like.
- For me (the AI), say: "I'm Subhadip. What's up?"
- For stuff I don't know: "Hmm, good question, but I'm drawing a blank there. What else can I tell you about Subhadip?"
`;

    // ===============================
    // 🕒 Class Routine Data
    // ===============================
const routineData = `
**Class Routine (CSE 3rd Year):**

| Time Slot | Class / Activity |
|------------|------------------|
| 10:20 AM – 11:05 AM | Operating Systems (CSE 3rd Year) |
| 11:05 AM – 11:50 AM | — |
| 11:50 AM – 12:35 PM | Compiler Design (SM) |
| 12:35 PM – 1:20 PM | IT Workshop (Python) G-B / Operating Systems (CSE 3rd Year) |
| 1:20 PM – 1:45 PM | **BREAK** |
| 1:45 PM – 2:30 PM | Operating Systems Lab (CSE 3rd Year) / GR-2 (Computer Lab)(SM) |
| 2:30 PM – 3:15 PM | GR-6 (Computer Lab)(SM) |
| 3:15 PM – 4:00 PM | GR-1 (Computer Lab)(SM) |
| 4:00 PM – 5:20 PM | Club Activities |

**Subjects & Labs:**
- Operating Systems (CSE 3rd Year)
- Compiler Design (SM)
- IT Workshop (Python) G-B
- Operating Systems Lab (CSE 3rd Year)
- Computer Labs: GR-1, GR-2, GR-6
- Club Activities
`;

    // Combine resume and routine data
    const fullProfileData = `${resumeData}\n\n${routineData}`;

    // Format chat history
    let formattedHistory = (history || []).map(msg => ({
      role: msg.role === "user" ? "user" : "model",
      parts: [{ text: msg.content }]
    }));

    // Ensure conversation starts with full data
    if (formattedHistory.length === 0 || formattedHistory[0].role !== "user") {
      formattedHistory.unshift({
        role: "user",
        parts: [{ text: `${fullProfileData}\n\nTell me about Subhadip’s routine and profile.` }]
      });
    }

    // Start chat session with validated history
    const chat = model.startChat({ history: formattedHistory });

    // Generate response with current message
    const result = await chat.sendMessage(message);
    const response = result.response.text();

    return res.json({ 
      response: response.trim(),
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Chat Error:', error);
    return res.status(500).json({
      error: "Oops! My circuits are buzzing. Try again?",
      technical: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

module.exports = router;
