const { ref, computed, effect } = require('@vue/reactivity');

const count = ref(2);
const price = 5;
const total = computed(() => count.value * price);

effect(() => {
    console.log('total: ', total.value);
});

// total: 10
count.value++; // total: 15
