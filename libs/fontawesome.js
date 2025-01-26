// lib/fontawesome.js
import { config, library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the CSS
import { faCoffee, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

config.autoAddCss = false; // Disable auto-adding CSS for SSR compatibility

// Add icons to the library for global use
library.add(faCoffee, faCheckCircle, faGithub);
