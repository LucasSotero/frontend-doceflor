<template>
<div>
  <div class="row"></div>
  <v-modal key1="modal1">
    <span slot="content">
      <div class="row">
        <div class="row"></div>
        <form class="col s12">
          <div class="row">
            <div class="input-field col s4">
              <input id="last_name" type="text" class="validate" required>
              <label for="last_name">Nome</label>
            </div>
            <div class="input-field col s8">
              <input id="last_name" type="text" class="validate" required>
              <label for="last_name">Sobrenome</label>
            </div>
            <div class="input-field col s12">
              <input id="last_name" type="text" class="validate" required>
              <label for="last_name">Endereço</label>
            </div>
            <div class="input-field col s3">
              <input id="icon_telephone" type="tel" class="validate">
              <label for="icon_telephone">Fone</label>
            </div>
            <div class="input-field col s3">
              <div class="input-field col s12">
                <button class="btn cyan waves-effect btn=small waves-light" name="action"> <i class="material-icons">add</i></button>
              </div>
            </div>
            <div class="input-field col s12">
              <input id="last_name" type="text" class="validate" min="0" max="999999" required>
              <label for="last_name">Observações</label>
            </div>
          </div>
        </form>
      </div>
    </span>
    <span slot="footer"><a href="#/products" class=" modal-action modal-close waves-effect btn waves-green">Salvar</a></span>
  </v-modal>
</div>
</template>

<script>
export default {
  name: 'hello'
}
</script>

<style>
.btn-small {
    height: 24px;
    line-height: 24px;
    padding: 0 0.5rem;
}
</style>
