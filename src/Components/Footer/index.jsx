export const Footer = () => {
    return (
        <html>
            <head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet"/>
                <link href="https://getbootstrap.com/docs/5.2/assets/css/docs.css" rel="stylesheet"/>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"></script>
            </head>
            <body>
            <div>
                <footer class="custom-footer text-center text-white">
                    <div class="container">
                    <section class="mt-5">
                        <div class="row text-center d-flex justify-content-center pt-5">
                        <div class="col-md-2">
                            <h6 class="text-uppercase font-weight-bold">
                            <a href="#" class="nav-link btn-dark text-white"> <i class="fas fa-info-circle"></i> Conheça o BocaWeb </a>
                            </h6>
                        </div>
                        <div class="col-md-3">
                            <h6 class="text-uppercase font-weight-bold">
                            <a href="#" class="nav-link btn-dark text-white"> <i class="fas fa-toolbox"></i>  Administração </a>
                            </h6>
                        </div>
                        <div class="col-md-2">
                            <h6 class="text-uppercase font-weight-bold">
                            <a href="#" class="nav-link btn-dark text-white"> <i class="fas fa-envelope"></i> Contato </a>
                            </h6>
                        </div>
                        </div>
                    </section>
                    <hr class="my-5" />
                    <section class="mb-5">
                        <div class="row d-flex justify-content-center">
                        <div class="col-lg-8">
                            <p>
                            O BocaWeb é um site que permite o acesso a Objetos Digitais em Audiodescrição. Um Objeto Digital em Audidescrição (ODA) consiste em uma imagem estática, textos descritivos da imagem e arquivos de áudio com a descrição da imagem. Esses três elementos conectados representam um ODA.
                            </p>
                        </div>
                        </div>
                    </section>
                    <section class="text-center mb-5">
                        <a href="#" class="text-white me-4">
                        <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" class="text-white me-4">
                        <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#" class="text-white me-4">
                        <i class="fab fa-google"></i>
                        </a>
                        <a href="#" class="text-white me-4">
                        <i class="fab fa-instagram"></i>
                        </a>
                        <a href="#" class="text-white me-4">
                        <i class="fab fa-linkedin"></i>
                        </a>
                        <a href="#" class="text-white me-4">
                        <i class="fab fa-github"></i>
                        </a>
                    </section>
                    </div>
                    <div class="text-center p-3 copyright">
                    © 2022 Copyright: IFMS Dourados - Trabalho de Frameworks2 – Anny Elly
                    </div>
                </footer>
            </div>
            </body>
        </html>
    )
}