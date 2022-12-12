<script setup>
import { ref } from "vue";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "@firebase/auth";

const response = ref("Response data will appear here");

const signInCredentials = ref({
  email: "",
  password: "",
});

const signUpCredentials = ref({
  email: "",
  password: "",
});

const firebaseConfig = ref({
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
});

const signIn = () => {
  const firebase = initializeApp(firebaseConfig.value);
  console.log(firebase);
  const auth = getAuth(firebase);
  signInWithEmailAndPassword(
    auth,
    signInCredentials.value.email,
    signInCredentials.value.password
  )
    .then((userCredential) => {
      response.value = userCredential;
    })
    .catch((error) => {
      response.value = error;
    });
};

const signUp = () => {
  const firebase = initializeApp(firebaseConfig.value);
  console.log(firebase);
  const auth = getAuth(firebase);
  createUserWithEmailAndPassword(
    auth,
    signUpCredentials.value.email,
    signUpCredentials.value.password
  )
    .then((userCredential) => {
      response.value = userCredential;
    })
    .catch((error) => {
      response.value = error;
    });
};
</script>
<template>
  <div
    class="flex justify-center p-6 bg-white text-gray-800 dark:bg-gray-800 dark:text-gray-50"
  >
    <div class="flex min-w-full justify-center mt-10">
      <div class="w-1/3 mr-5 bg-gray-50 dark:bg-gray-900 p-6 rounded-xl shadow">
        <h1 class="font-medium text-xl mb-3">Firebase Config</h1>
        <div class="mb-6">
          <label
            for="apiKey"
            class="block mb-2 text-base font-medium text-gray-900 dark:text-white"
            >apiKey</label
          >
          <input
            type="text"
            id="apiKey"
            class="bg-white border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            v-model="firebaseConfig.apiKey"
          />
        </div>
        <div class="mb-6">
          <label
            for="authDomain"
            class="block mb-2 text-base font-medium text-gray-900 dark:text-white"
            >authDomain</label
          >
          <input
            type="text"
            id="authDomain"
            class="bg-white border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            v-model="firebaseConfig.authDomain"
          />
        </div>
        <div class="mb-6">
          <label
            for="projectId"
            class="block mb-2 text-base font-medium text-gray-900 dark:text-white"
            >projectId</label
          >
          <input
            type="text"
            id="projectId"
            class="bg-white border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            v-model="firebaseConfig.projectId"
          />
        </div>
        <div class="mb-6">
          <label
            for="storageBucket"
            class="block mb-2 text-base font-medium text-gray-900 dark:text-white"
            >storageBucket</label
          >
          <input
            type="text"
            id="storageBucket"
            class="bg-white border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            v-model="firebaseConfig.storageBucket"
          />
        </div>
        <div class="mb-6">
          <label
            for="messagingSenderId"
            class="block mb-2 text-base font-medium text-gray-900 dark:text-white"
            >messagingSenderId</label
          >
          <input
            type="text"
            id="messagingSenderId"
            class="bg-white border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            v-model="firebaseConfig.messagingSenderId"
          />
        </div>
        <div class="mb-6">
          <label
            for="appId"
            class="block mb-2 text-base font-medium text-gray-900 dark:text-white"
            >appId</label
          >
          <input
            type="text"
            id="appId"
            class="bg-white border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            v-model="firebaseConfig.appId"
          />
        </div>
      </div>
      <div class="w-1/3 p-6 mr-5">
        <h1 class="font-medium text-xl mb-3">Sign in</h1>
        <div class="mb-6">
          <label
            for="email"
            class="block mb-2 text-base font-medium text-gray-900 dark:text-white"
            >Your email</label
          >
          <input
            type="email"
            id="email"
            class="bg-white border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            v-model="signInCredentials.email"
          />
        </div>
        <div class="mb-6">
          <label
            for="password"
            class="block mb-2 text-base font-medium text-gray-900 dark:text-white"
            >Your password</label
          >
          <input
            type="password"
            id="password"
            class="bg-white border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            v-model="signInCredentials.password"
          />
        </div>
        <button
          @click="signIn"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
        <h1 class="font-medium text-xl mb-3 mt-10">Create an Account</h1>
        <div class="mb-6">
          <label
            for="email"
            class="block mb-2 text-base font-medium text-gray-900 dark:text-white"
            >Your email</label
          >
          <input
            type="email"
            id="email"
            class="bg-white border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            v-model="signUpCredentials.email"
          />
        </div>
        <div class="mb-6">
          <label
            for="password"
            class="block mb-2 text-base font-medium text-gray-900 dark:text-white"
            >Your password</label
          >
          <input
            type="password"
            id="password"
            class="bg-white border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            v-model="signUpCredentials.password"
          />
        </div>
        <button
          @click="signUp"
          class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Submit
        </button>
      </div>
      <div class="w-1/3 bg-gray-50 dark:bg-gray-900 p-6 rounded-xl shadow">
        <h1 class="font-medium text-xl mb-3 mt-10">Output from Firebase</h1>
        <div class="p-6 min-w-full rounded-lg overflow-x-auto">
          <pre class="text-sm dark:text-red-600">{{ response }}</pre>
        </div>
      </div>
    </div>
  </div>
</template>
