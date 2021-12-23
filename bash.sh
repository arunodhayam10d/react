 newgrp docker
 docker build -t app .
 docker run -d --name react_app -p 3001:3000 app