const { Usuario } = require("../models");
const jwt = require("jsonwebtoken");
class UsuarioService {
  async getAllUsuarios() {
    return await Usuario.findAll();
  }

  async getUsuarioById(id) {
    return await Usuario.findByPk(id);
  }

  async createUsuario(data) {
    return await Usuario.create(data);
  }

  async deleteUsuario(id) {
    return await Usuario.destroy({ where: { id } });
  }

  async login(correo, contrasena) {
    const usuario = await Usuario.findOne({ where: { correo } });

    if (!usuario) {
      return { error: "Correo no registrado" };
    }
    if (contrasena !== usuario.contrasena) {
      return { error: "Credenciales incorrectas" };
    }
    const token = jwt.sign(
      { id: usuario.id, correo: usuario.correo },
      "secreto123",
      { expiresIn: "2h" }
    );
    return { token, usuario };
  }
}

module.exports = new UsuarioService();
