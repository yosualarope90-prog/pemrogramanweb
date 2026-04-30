<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio Saya</title>
    <style>
       
        .portfolio-gallery {
            display: flex;
            gap: 10px;
        }
        .portfolio-gallery img {
            width: 200px;
            height: auto;
            border: none;
        }
            .profile {
                width: 120px;
                height: 120px;
                border-radius: 50%;
                object-fit: cover;
                border: 2px solid #ccc;
            }


        
    </style>
</head>
<body>

    <header>
        <h1>Welcome to My Portfolio</h1>
        <nav>
            <a href="#">Home</a> |
            <a href="#projects">Projects</a> |
            <a href="#contact">Contact</a>
        </nav>
    </header>

    <hr>

    <section>
        <img src="foto kkn.jpg" alt="Foto Profil" class="profile">
        <h2>Jhosua</h2>
        <p>Halo, saya mahasiswa Teknik Informatika di Universitas Mercu Buana Yogyakarta.</p>
    </section>


    <section id="projects">
        <h3>Skills</h3>
        <ul>
            <li>HTML & CSS</li>
            <li>PL/SQL & Oracle Database</li>
            <li>Sistem Pakar (Forward Chaining)</li>
        </ul>

        <h3>Projects</h3>
        <ol>
            <li><strong>KostKu</strong> - SaaS Manajemen Kos</li>
            <li><strong>Sustainify</strong> - Sustainable Business App</li>
            <li><strong>Sistem Pakar</strong> - Diagnosa Diabetes Mellitus</li>
        </ol>
    </section>

    <section>
        <h3>Portfolio Gallery</h3>
        <div class="portfolio-gallery">
            <img src="kostku.jpeg" alt="Project 1">
            <img src="sustainy.jpeg" alt="Project 2">
            <img src="sistem pakar.jpeg" alt="Project 3">
        </div>
    </section>

    <hr>

    <section id="contact">
        <h3>Contact Me</h3>
        <form action="/submit" method="post">
            <label for="name">Name:</label><br>
            <input type="text" id="name" name="name" required><br><br>

            <label for="email">Email:</label><br>
            <input type="email" id="email" name="email" required><br><br>

            <label for="message">Message:</label><br>
            <textarea id="message" name="message" rows="4" cols="50" required></textarea><br><br>

            <input type="submit" value="Submit">
        </form>
    </section>

</body>
</html>
