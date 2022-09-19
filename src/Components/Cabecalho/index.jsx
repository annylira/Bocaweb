export const Cabecalho = ({busca, buscaODA}) => {
    var logo=require('./img/logo.png');
    return (
        <html>
            <head>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet"/>
                <link href="https://getbootstrap.com/docs/5.2/assets/css/docs.css" rel="stylesheet"/>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"></script>
            </head>
            <body>
            <nav class="navbar navbar-expand-lg text-white">
                <div class="container-fluid">
                    <a class="navbar-brand text-white" href="#"><img src={logo} class="d-inline-block"></img>BocaWeb Front</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto justify-content-end flex-grow-1 pe-3">
                        <li class="nav-item">
                            <a href="#" class="nav-link btn-dark"> <i class="fas fa-info-circle"></i> Conheça o BocaWeb </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link btn-dark"> <i class="fas fa-toolbox"></i>  Administração </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link btn-dark"> <i class="fas fa-envelope"></i> Contato </a>
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" name='busca' type='text' value={busca} placeholder='Buscar odas cadastradas' onChange={buscaODA}/>
                        <button class="btn text-black bg-light" type="submit">Pesquisar</button>
                    </form>
                    </div>
                </div>
            </nav>
            </body>
        </html>
    )
}