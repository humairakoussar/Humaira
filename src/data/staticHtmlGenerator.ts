export function generateStaticBootstrapHtml(): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Humaira Kousar | Graphic Designer & Brand Identity</title>
  <meta name="description" content="Official portfolio of Humaira Kousar - Graphic Designer, Brand Identity Specialist & Illustrator.">
  <!-- Bootstrap 5 CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <!-- Bootstrap Icons -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" rel="stylesheet">
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Syne:wght@600;700;800&family=Playfair+Display:ital,wght@0,600;1,400&display=swap" rel="stylesheet">
  <style>
    :root {
      --primary: #e11d48;
      --secondary: #7c3aed;
      --accent: #f59e0b;
      --dark: #0f172a;
      --bg-cream: #faf8f5;
      --card-bg: #ffffff;
    }
    body {
      font-family: 'Plus Jakarta Sans', sans-serif;
      background-color: var(--bg-cream);
      color: #334155;
    }
    h1, h2, h3, .heading-font {
      font-family: 'Syne', sans-serif;
      color: var(--dark);
    }
    .serif-accent {
      font-family: 'Playfair Display', serif;
    }
    .btn-primary-custom {
      background: linear-gradient(135deg, #e11d48 0%, #be123c 100%);
      color: #fff;
      border: none;
      padding: 10px 24px;
      border-radius: 50px;
      font-weight: 600;
      transition: all 0.3s ease;
    }
    .btn-primary-custom:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 20px rgba(225, 29, 72, 0.25);
      color: #fff;
    }
    .card-project {
      border: 1px solid rgba(0,0,0,0.06);
      border-radius: 16px;
      overflow: hidden;
      transition: all 0.3s ease;
      background: #fff;
    }
    .card-project:hover {
      transform: translateY(-6px);
      box-shadow: 0 20px 30px rgba(0,0,0,0.07);
    }
    .color-chip {
      height: 48px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.75rem;
      font-weight: 600;
    }
  </style>
</head>
<body>

  <!-- Navigation -->
  <nav class="navbar navbar-expand-lg sticky-top bg-white border-bottom py-3">
    <div class="container">
      <a class="navbar-brand fw-bold heading-font d-flex align-items-center gap-2" href="#home">
        <span class="badge bg-danger rounded-pill p-2"><i class="bi bi-vector-pen"></i></span>
        Humaira Kousar
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navMenu">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 fw-medium gap-lg-3">
          <li class="nav-item"><a class="nav-link" href="#home">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
          <li class="nav-item"><a class="nav-link" href="#skills">Skills</a></li>
          <li class="nav-item"><a class="nav-link" href="#branding">Branding</a></li>
          <li class="nav-item"><a class="nav-link" href="#illustrations">Illustrations</a></li>
          <li class="nav-item"><a class="nav-link" href="#color-theory">Color Theory</a></li>
          <li class="nav-item"><a class="nav-link" href="#services">Services</a></li>
          <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
        </ul>
        <a href="#contact" class="btn btn-primary-custom ms-lg-3">Get in Touch</a>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <section id="home" class="py-5">
    <div class="container py-lg-5">
      <div class="row align-items-center g-5">
        <div class="col-lg-7">
          <span class="badge bg-light text-danger border border-danger-subtle px-3 py-2 rounded-pill fw-semibold mb-3">
            <i class="bi bi-stars me-1"></i> Visual Designer & Brand Strategist
          </span>
          <h1 class="display-4 fw-bolder mb-3">
            Crafting memorable brands through <span class="text-danger serif-accent fst-italic">intentional</span> color & form.
          </h1>
          <p class="lead text-muted mb-4">
            I'm Humaira Kousar, a graphic designer specializing in brand identity systems, 3D character illustrations, and packaging design that blends emotional color theory with commercial precision.
          </p>
          <div class="d-flex flex-wrap gap-3 mb-5">
            <a href="#branding" class="btn btn-primary-custom">Explore Portfolio</a>
            <a href="https://github.com/humairakoussar" target="_blank" class="btn btn-outline-dark rounded-pill px-4 fw-semibold">
              <i class="bi bi-github me-2"></i>GitHub Profile
            </a>
          </div>
          <div class="row g-3 border-top pt-4">
            <div class="col-4">
              <h3 class="fw-bold mb-0 text-danger">5+</h3>
              <small class="text-muted">Years Experience</small>
            </div>
            <div class="col-4">
              <h3 class="fw-bold mb-0 text-danger">140+</h3>
              <small class="text-muted">Projects Completed</small>
            </div>
            <div class="col-4">
              <h3 class="fw-bold mb-0 text-danger">98%</h3>
              <small class="text-muted">Client Satisfaction</small>
            </div>
          </div>
        </div>
        <div class="col-lg-5 text-center">
          <div class="position-relative d-inline-block">
            <img src="./images/humaira_avatar_1789293107218.jpg" alt="Humaira Kousar Avatar" class="img-fluid rounded-circle shadow-lg border border-4 border-white" style="max-width: 380px; width: 100%;">
            <div class="position-absolute bottom-0 start-0 bg-white p-3 rounded-4 shadow-sm border text-start">
              <div class="d-flex align-items-center gap-2">
                <span class="p-2 bg-success-subtle text-success rounded-circle"><i class="bi bi-check2"></i></span>
                <div>
                  <h6 class="mb-0 fw-bold">Available for Projects</h6>
                  <small class="text-muted">Remote & Global</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- About Section -->
  <section id="about" class="py-5 bg-white border-top">
    <div class="container py-lg-4">
      <div class="text-center max-w-700 mx-auto mb-5">
        <span class="badge bg-secondary-subtle text-secondary px-3 py-2 rounded-pill fw-semibold">My Philosophy</span>
        <h2 class="display-6 fw-bold mt-2">Every design is a conversation.</h2>
        <p class="text-muted">I believe visual identity is more than decoration—it is the unspoken voice of your mission.</p>
      </div>
      <div class="row g-4 align-items-center">
        <div class="col-lg-6">
          <img src="./images/designer_3d_tools_1789293124079.jpg" alt="Creative Studio" class="img-fluid rounded-4 shadow">
        </div>
        <div class="col-lg-6">
          <h3 class="fw-bold mb-3">Hi, I'm Humaira Kousar</h3>
          <p class="text-muted">
            With over half a decade in creative visual development, I help founders, innovators, and agencies translate complex concepts into aesthetic brand languages that command attention.
          </p>
          <div class="d-flex flex-column gap-3 mt-4">
            <div class="d-flex gap-3">
              <span class="badge bg-danger-subtle text-danger p-3 rounded-circle fs-5"><i class="bi bi-palette"></i></span>
              <div>
                <h5 class="fw-bold mb-1">Color Theory Expertise</h5>
                <p class="text-muted mb-0 small">Harmonic 60-30-10 balancing, emotional color psychology, and strict WCAG accessibility.</p>
              </div>
            </div>
            <div class="d-flex gap-3">
              <span class="badge bg-primary-subtle text-primary p-3 rounded-circle fs-5"><i class="bi bi-bezier2"></i></span>
              <div>
                <h5 class="fw-bold mb-1">Pixel & Vector Precision</h5>
                <p class="text-muted mb-0 small">Mathematical grid systems, scalable vector architecture, and print-ready CMYK execution.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Skills Section -->
  <section id="skills" class="py-5">
    <div class="container py-lg-4">
      <div class="text-center mb-5">
        <h2 class="display-6 fw-bold">Creative Suite & Technical Mastery</h2>
        <p class="text-muted">Industry-leading design software tuned for high-impact production.</p>
      </div>
      <div class="row g-4">
        <div class="col-md-4">
          <div class="p-4 bg-white rounded-4 shadow-sm border h-100">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h5 class="fw-bold mb-0">Adobe Illustrator</h5>
              <span class="badge bg-warning text-dark">98%</span>
            </div>
            <div class="progress mb-3" style="height: 8px;">
              <div class="progress-bar bg-warning" style="width: 98%;"></div>
            </div>
            <p class="small text-muted mb-0">Vector logos, branding systems, iconography, and complex print dielines.</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="p-4 bg-white rounded-4 shadow-sm border h-100">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h5 class="fw-bold mb-0">Adobe Photoshop</h5>
              <span class="badge bg-primary">95%</span>
            </div>
            <div class="progress mb-3" style="height: 8px;">
              <div class="progress-bar bg-primary" style="width: 95%;"></div>
            </div>
            <p class="small text-muted mb-0">Photo manipulation, digital painting, realistic product mockups, and texture craft.</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="p-4 bg-white rounded-4 shadow-sm border h-100">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h5 class="fw-bold mb-0">Figma & UI Systems</h5>
              <span class="badge bg-purple" style="background-color: #8b5cf6; color: white;">92%</span>
            </div>
            <div class="progress mb-3" style="height: 8px;">
              <div class="progress-bar" style="width: 92%; background-color: #8b5cf6;"></div>
            </div>
            <p class="small text-muted mb-0">Design tokens, interactive prototypes, auto-layout components, and social kits.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Color Theory Lab -->
  <section id="color-theory" class="py-5 bg-white border-top">
    <div class="container py-lg-4">
      <div class="text-center mb-5">
        <span class="badge bg-danger-subtle text-danger px-3 py-2 rounded-pill fw-semibold">Interactive Study</span>
        <h2 class="display-6 fw-bold mt-2">Harmonic Color Theory</h2>
        <p class="text-muted">Crafting palettes that balance contrast, psychological resonance, and aesthetic charm.</p>
      </div>
      <div class="row g-4">
        <div class="col-lg-6">
          <div class="p-4 border rounded-4 bg-light">
            <h5 class="fw-bold mb-1">Petal & Amethyst Glow (Complementary)</h5>
            <p class="small text-muted mb-3">Rose Fuchsia meets Deep Twilight Violet with champagne porcelain backgrounds.</p>
            <div class="row g-2">
              <div class="col"><div class="color-chip text-white" style="background:#E11D48;">#E11D48</div></div>
              <div class="col"><div class="color-chip text-white" style="background:#7C3AED;">#7C3AED</div></div>
              <div class="col"><div class="color-chip text-dark border" style="background:#FAF8F5;">#FAF8F5</div></div>
              <div class="col"><div class="color-chip text-dark" style="background:#EDE9FE;">#EDE9FE</div></div>
              <div class="col"><div class="color-chip text-white" style="background:#1E1B4B;">#1E1B4B</div></div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="p-4 border rounded-4 bg-light">
            <h5 class="fw-bold mb-1">Tuscan Sunset & Terracotta (Analogous)</h5>
            <p class="small text-muted mb-3">Warm earthen gradient from desert terracotta to amber wheat and espresso.</p>
            <div class="row g-2">
              <div class="col"><div class="color-chip text-white" style="background:#C2410C;">#C2410C</div></div>
              <div class="col"><div class="color-chip text-dark" style="background:#F59E0B;">#F59E0B</div></div>
              <div class="col"><div class="color-chip text-dark border" style="background:#FDFBF7;">#FDFBF7</div></div>
              <div class="col"><div class="color-chip text-white" style="background:#65A30D;">#65A30D</div></div>
              <div class="col"><div class="color-chip text-white" style="background:#292524;">#292524</div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact" class="py-5">
    <div class="container py-lg-4 text-center">
      <h2 class="display-6 fw-bold mb-3">Let's Create Something Extraordinary Together</h2>
      <p class="lead text-muted mb-4">Have an exciting brand project, packaging idea, or custom illustration requirement?</p>
      <div class="d-flex justify-content-center gap-3 flex-wrap">
        <a href="mailto:humairakousar.design@gmail.com" class="btn btn-primary-custom px-4 py-3">
          <i class="bi bi-envelope-fill me-2"></i>humairakousar.design@gmail.com
        </a>
        <a href="https://github.com/humairakoussar" target="_blank" class="btn btn-outline-dark rounded-pill px-4 py-3">
          <i class="bi bi-github me-2"></i>github.com/humairakoussar
        </a>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="py-4 bg-dark text-white border-top">
    <div class="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
      <div class="small text-muted">
        &copy; 2025 Humaira Kousar. Designed with color theory & vector precision.
      </div>
      <div class="d-flex gap-3">
        <a href="https://github.com/humairakoussar" target="_blank" class="text-white text-decoration-none"><i class="bi bi-github fs-5"></i></a>
        <a href="mailto:humairakousar.design@gmail.com" class="text-white text-decoration-none"><i class="bi bi-envelope fs-5"></i></a>
      </div>
    </div>
  </footer>

  <!-- Bootstrap 5 JS Bundle -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>`;
}
