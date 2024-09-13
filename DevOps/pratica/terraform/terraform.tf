terraform {
  required_providers {
    docker = {
      source = "kreuzwerker/docker"
    }
  }
}

provider "docker" {
  host = "unix:///Users/italo.medici/.docker/run/docker.sock"
}

resource "docker_image" "nginx" {
  name         = "nginx:latest"
}

resource "docker_container" "nginx" {
  image = docker_image.nginx.image_id
  name  = "tutorial"
  ports {
    internal = 80
    external = 8080
  }
}


resource "docker_container" "nginx2" {
  image = docker_image.nginx.image_id
  name  = "tutorial2"
  ports {
    internal = 80
    external = 8081
  }
}


resource "docker_container" "nginx3" {
  image = docker_image.nginx.image_id
  name  = "tutorial3"
  ports {
    internal = 80
    external = 8082
  }
}