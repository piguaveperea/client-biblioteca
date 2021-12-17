<template>
  <div>
    <div class="mb-8">
      <v-card>
        <v-container>
          <v-card-title>{{ title }}</v-card-title>
          <v-card>
            <v-container>
              <v-row>
                <v-col>
                  Autor: <v-chip small color="primary"> {{ author }}</v-chip>
                </v-col>
                <v-col>
                  País: <v-chip small color="primary"> {{ pais }}</v-chip>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-container>
        <v-card-actions>
          <v-row align="center" justify="space-around">
            <v-col>
              <v-btn color="primary" block @click="takebook">Pedir</v-btn>
            </v-col>
            <v-col>
              <v-btn color="secondary" block @click="quitbook">Devolver</v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    title: String,
    author: String,
    pais: String,
  },
  methods: {
    takebook() {
      this.$emit("takeBook", (this.idBook = this.id));
    },
    quitbook() {
      this.$emit("quitBook", (this.idBook = this.id));
    },
    
  },
};
</script>