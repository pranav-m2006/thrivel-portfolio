/* ==========================================================================
   PRANAV M — PORTFOLIO CLIENT JAVASCRIPT
   Features: 3D Neural Particle Engine, 3D Tilt Cards, Magnetic Buttons,
             Interactive Filters, and Clipboard Toast.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* --------------------------------------------------------------------------
   * 1. 3D INTERACTIVE NEURAL PARTICLE CANVAS
   * -------------------------------------------------------------------------- */
  const canvas = document.getElementById('neuralCanvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];
    const particleCount = window.innerWidth < 768 ? 45 : 90;
    const maxDistance = 140;

    let mouse = {
      x: null,
      y: null,
      targetX: 0,
      targetY: 0,
      radius: 160
    };

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resize);
    resize();

    // Track mouse for 3D orbital tilt & repulsion
    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.targetX = (e.clientX - width / 2) * 0.0003;
      mouse.targetY = (e.clientY - height / 2) * 0.0003;
    });

    window.addEventListener('mouseleave', () => {
      mouse.x = null;
      mouse.y = null;
    });

    class Particle3D {
      constructor() {
        this.reset();
      }

      reset() {
        // Spherical distribution in 3D
        const radius = Math.random() * (Math.min(width, height) * 0.45);
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(Math.random() * 2 - 1);

        this.x = radius * Math.sin(phi) * Math.cos(theta);
        this.y = radius * Math.sin(phi) * Math.sin(theta);
        this.z = radius * Math.cos(phi);

        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.vz = (Math.random() - 0.5) * 0.4;

        this.baseSize = Math.random() * 2 + 1;
        this.color = Math.random() > 0.4 ? 'rgba(99, 102, 241,' : 'rgba(6, 182, 212,';
      }

      update(rotX, rotY) {
        // 3D rotation around Y and X axis based on time & mouse
        const cosY = Math.cos(0.002 + rotX);
        const sinY = Math.sin(0.002 + rotX);
        const cosX = Math.cos(0.001 + rotY);
        const sinX = Math.sin(0.001 + rotY);

        // Rotate Y
        let x1 = this.x * cosY - this.z * sinY;
        let z1 = this.z * cosY + this.x * sinY;

        // Rotate X
        let y2 = this.y * cosX - z1 * sinX;
        let z2 = z1 * cosX + this.y * sinX;

        this.x = x1 + this.vx;
        this.y = y2 + this.vy;
        this.z = z2 + this.vz;

        // Boundary containment
        const maxR = Math.min(width, height) * 0.55;
        const curR = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
        if (curR > maxR) {
          this.vx *= -1;
          this.vy *= -1;
          this.vz *= -1;
        }

        // Perspective Projection
        const fov = 450;
        const scale = fov / (fov + this.z + 200);
        this.projX = this.x * scale + width / 2;
        this.projY = this.y * scale + height / 2;
        this.projScale = Math.max(0.2, scale);
        this.alpha = Math.min(1, Math.max(0.15, (this.z + 300) / 600));

        // Subtle interactive mouse repulsion in screen-space
        if (mouse.x !== null) {
          const dx = this.projX - mouse.x;
          const dy = this.projY - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const force = (1 - dist / mouse.radius) * 3;
            this.x += (dx / dist) * force;
            this.y += (dy / dist) * force;
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.projX, this.projY, this.baseSize * this.projScale, 0, Math.PI * 2);
        ctx.fillStyle = `${this.color} ${this.alpha * 0.8})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color.includes('6, 182') ? '#06b6d4' : '#6366f1';
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle3D());
    }

    let curRotX = 0;
    let curRotY = 0;

    function animate() {
      ctx.clearRect(0, 0, width, height);

      // Smooth dampening of mouse influence on rotation
      curRotX += (mouse.targetX - curRotX) * 0.05;
      curRotY += (mouse.targetY - curRotY) * 0.05;

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].update(curRotX, curRotY);
        particles[i].draw();

        // Connect nearby nodes
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].projX - particles[j].projX;
          const dy = particles[i].projY - particles[j].projY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const lineAlpha = (1 - dist / maxDistance) * 0.25 * particles[i].alpha * particles[j].alpha;
            ctx.beginPath();
            ctx.moveTo(particles[i].projX, particles[i].projY);
            ctx.lineTo(particles[j].projX, particles[j].projY);
            ctx.strokeStyle = `rgba(99, 102, 241, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    }

    animate();
  }

  /* --------------------------------------------------------------------------
   * 2. 3D CARD TILT EFFECT (Bento Grid cards)
   * -------------------------------------------------------------------------- */
  const tiltCards = document.querySelectorAll('.tilt-card');

  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Calculate tilt angles (limit between -7 and 7 degrees for subtle luxury)
      const rotateX = ((y - centerY) / centerY) * -6.5;
      const rotateY = ((x - centerX) / centerX) * 6.5;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px) scale3d(1.008, 1.008, 1.008)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0) scale3d(1, 1, 1)';
    });
  });

  /* --------------------------------------------------------------------------
   * 3. MAGNETIC BUTTONS
   * -------------------------------------------------------------------------- */
  const magneticButtons = document.querySelectorAll('.magnetic');

  magneticButtons.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      // Subtle magnetic pull
      btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0px, 0px)';
    });
  });

  /* --------------------------------------------------------------------------
   * 4. SKILLS FILTER TABS
   * -------------------------------------------------------------------------- */
  const filterButtons = document.querySelectorAll('.filter-btn');
  const skillCards = document.querySelectorAll('.skill-category-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle active button style
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      skillCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.classList.remove('hidden');
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  /* --------------------------------------------------------------------------
   * 5. COPY TO CLIPBOARD & TOAST SYSTEM
   * -------------------------------------------------------------------------- */
  const copyHeroBtn = document.getElementById('copyEmailHeroBtn');
  const copyContactBtn = document.getElementById('copyEmailContactBtn');
  const toast = document.getElementById('toastNotification');
  let toastTimeout;

  function showToast(msg) {
    if (!toast) return;
    const msgEl = toast.querySelector('.toast-message');
    if (msgEl) msgEl.textContent = msg;

    toast.classList.add('active');

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove('active');
    }, 3200);
  }

  function copyTextToClipboard(text, successMessage) {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text)
        .then(() => showToast(successMessage))
        .catch(() => fallbackCopy(text, successMessage));
    } else {
      fallbackCopy(text, successMessage);
    }
  }

  function fallbackCopy(text, successMessage) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      showToast(successMessage);
    } catch (err) {
      showToast('Could not auto-copy. Email: pranav.m.cst.2024@snsce.ac.in');
    }
    document.body.removeChild(textArea);
  }

  if (copyHeroBtn) {
    copyHeroBtn.addEventListener('click', () => {
      const email = copyHeroBtn.getAttribute('data-email');
      copyTextToClipboard(email, 'Email copied: ' + email);
    });
  }

  if (copyContactBtn) {
    copyContactBtn.addEventListener('click', () => {
      const email = copyContactBtn.getAttribute('data-email');
      copyTextToClipboard(email, 'Email copied: ' + email);
    });
  }

  /* --------------------------------------------------------------------------
   * 6. ACTIVE NAV LINK ON SCROLL
   * -------------------------------------------------------------------------- */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-dock .nav-item');

  function updateActiveNav() {
    const scrollY = window.pageYOffset;

    sections.forEach(sec => {
      const secHeight = sec.offsetHeight;
      const secTop = sec.offsetTop - 150;
      const secId = sec.getAttribute('id');

      if (scrollY >= secTop && scrollY < secTop + secHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${secId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav);

});
