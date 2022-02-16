<template>
  <div>
    <label for="">{{ label }}</label>
    <b-form-input
      :value="valueTemp"
      @input="handleInput"
      :name="name"
      :id="id"
      :placeholder="placeholder || label"
      v-validate="rules"
      :state="validateState(id)"
    ></b-form-input>
    <b-form-invalid-feedback id="input-1-live-feedback">{{ veeErrors.first(id) }}</b-form-invalid-feedback>
  </div>
</template>

<script>
export default {
  inject: ['$validator'],
  props: {
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    rules: {
      type: Object,
      default: () => ({})
    }
  },
  watch: {
    value (value) {
      this.valueTemp = value
    }
  },
  methods: {
    validateState (ref) {
      if (
        this.veeFields[ref] &&
        (this.veeFields[ref].dirty || this.veeFields[ref].validated)
      ) {
        return !this.veeErrors.has(ref)
      }

      return null
    },
    handleInput (e) {
      this.$emit('input', e)
    }
  },
  data () {
    return {
      valueTemp: this.value
    }
  }
}
</script>
