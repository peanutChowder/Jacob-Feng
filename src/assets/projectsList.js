import inventoryManagementApp from './inventoryTrackerDemo.gif'
import kesslerFuzzy from './kesslerFuzzyDemo.gif'
import concurrentJob from './concurrentJobManagerDemo.gif'
import coolGpt from './coolGptDemo.gif'

const projectList = [
    {
        id: 'itac-demo',
        name: 'Inventory Management App',
        gif: inventoryManagementApp,
        url: 'https://github.com/CMPUT301F23T29/agile-beast',
        techStack: 'Tech stack: Android Studio + Java, Firebase.',
        description: 'Built in an Agile team of 6. Inventory tracking made easy with features such as quick barcode scanning and item lookup on Amazon/Google.'
    },
    {
        id: 'kf-demo',
        name: 'Kessler Fuzzy System',
        gif: kesslerFuzzy,
        url: 'https://github.com/peanutChowder/XFC-fuzzy-agent',
        techStack: 'Tech stack: Python, Scikit-Fuzzy, EasyGA',
        description: 'Optimized with genetic algorithms. Uses fuzzy inference to maximize asteroid destruction, minimize collisions.'
    },
    {
        id: 'cj-demo',
        name: 'Concurrent command line',
        gif: concurrentJob,
        url: 'https://github.com/peanutChowder/Shell-Simulator',
        techStack: 'Tech stack: C++/C',
        description: 'Tackles the challenges of concurrent programming without hiccups. Concurrent job management is the foundation that all modern software is built on.'
    },
    {
        id: 'cg-demo',
        name: 'GPT Summarizer',
        gif: coolGpt,
        url: 'https://github.com/GPTGDSC/cool-gpt-app',
        techStack: 'Tech stack: Vite.js + React, Flask',
        description: 'Harnesses the power of ChatGPT to summarize PDFs and raw text.'
    },
]

export default projectList