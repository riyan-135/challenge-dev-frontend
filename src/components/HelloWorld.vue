<template>
  <div>
    <div class="flex flex-col">
      <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <button
            @click="onToggle"
            class="bg-purple-500 border border-purple-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-md hover:shadow-lg hover:bg-purple-600"
            id="addButton"
          >
            Create
          </button>
          <div class="overflow-hidden">
            <table class="min-w-full">
              <thead class="bg-white border-b">
                <tr>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    #
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Phone
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Alamat
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="bg-gray-100 border-b"
                  v-for="(item, index) in data"
                  :key="index"
                >
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                  >
                    {{ index + 1 }}
                  </td>
                  <td
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                  >
                    {{ item.nama }}
                  </td>
                  <td
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                  >
                    {{ item.email }}
                  </td>
                  <td
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                  >
                    {{ item.phone }}
                  </td>
                  <td
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                  >
                    {{ item.alamat }}
                  </td>
                  <td
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                  >
                  <button
                    @click="popupEdit(item.id)"
                    class="bg-purple-500 border border-purple-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-md hover:shadow-lg hover:bg-purple-600 editButton"
                  >
                    Edit
                  </button>
                  <button
                    @click="handleDelete(item.id)"
                    class="bg-red-500 border border-purple-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-md hover:shadow-lg hover:bg-red-600 deleteButton"
                  >
                    Delete
                  </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center p-3"></div>
    <transition name="fade">
      <div v-if="isModalVisible">
        <div
          @click="onToggle"
          class="absolute bg-black opacity-70 inset-0 z-0"
        ></div>
        <div
          class="w-full max-w-lg p-3 relative mx-auto my-auto rounded-xl shadow-lg bg-white"
        >
        <p>{{ isEdit === true ? 'Edit' : 'Create' }}</p>
          <div>
            <div class="text-center p-3 flex-auto justify-center leading-6">
              <div class="flex items-center justify-center p-12">
                <!-- Author: FormBold Team -->
                <!-- Learn More: https://formbold.com -->
                <div class="mx-auto w-full">
                  <div class="-mx-3 flex flex-wrap">
                    <div class="w-full px-3">
                      <div class="mb-5">
                        <label
                          for="fName"
                          class="mb-3 block text-base font-medium text-[#07074D]"
                        >
                          Nama
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="namaInput"
                          v-model="formData.nama"
                          placeholder="input nama"
                          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                      </div>
                    </div>
                    <div class="w-full px-3">
                      <div class="mb-5">
                        <label
                          for="name"
                          class="mb-3 block text-base font-medium text-[#07074D]"
                        >
                          Email
                        </label>
                        <input
                          type="text"
                          name="email"
                          id="emailInput"
                          v-model="formData.email"
                          placeholder="Masukkan email"
                          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="-mx-3 flex flex-wrap">
                    <div class="w-full px-3 ">
                      <div class="mb-5">
                        <label
                          for="date"
                          class="mb-3 block text-base font-medium text-[#07074D]"
                        >
                          Phone
                        </label>
                        <input
                          type="number"
                          name="phone"
                          id="phoneInput"
                          v-model="formData.phone"
                          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                      </div>
                    </div>
                    <div class="w-full px-3 ">
                      <div class="mb-5">
                        <label
                          for="time"
                          class="mb-3 block text-base font-medium text-[#07074D]"
                        >
                          Alamat
                        </label>
                        <input
                          type="text"
                          name="alamat"
                          id="alamatInput"
                          v-model="formData.alamat"
                          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-3 mt-2 text-center space-x-4 md:block">
              <button
                class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-md hover:shadow-lg hover:bg-gray-100"
                id="saveButton"
                @click="isEdit === true ? handleUpdate() : handleSubmit()"
              >
                Save
              </button>
              <button
                @click="onToggle"
                class="mb-2 md:mb-0 bg-purple-500 border border-purple-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-md hover:shadow-lg hover:bg-purple-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      data: [],
      isOpen: false,
      formData: {
        nama: '',
        email: '',
        phone: '',
        alamat: ''
      },
      id: 0,
      isEdit: false
    };
  },

  computed: {
    isModalVisible() {
      return this.isOpen;
    },
  },

  mounted() {
    this.getData();
  },

  methods: {
    async getData() {
      const data = await axios.get("http://127.0.0.1:8000/api/karyawan");
      console.log(data, "ok");
      this.data = data.data;
    },

    onToggle() {
      this.isOpen = !this.isOpen;
    },

    async popupEdit(id) {
      const data = await axios.get(`http://127.0.0.1:8000/api/karyawan/${id}`)
      this.isOpen = true
      this.isEdit = true
      const item = data.data
      this.formData.nama = item.nama
      this.formData.email = item.email
      this.formData.phone = item.phone
      this.formData.alamat = item.alamat
      this.id = item.id
    },

    async handleSubmit() {
      const data = {
        nama: this.formData.nama,
        email: this.formData.email,
        phone: this.formData.phone,
        alamat: this.formData.alamat
      }

      const res = await axios.post("http://127.0.0.1:8000/api/karyawan", data)
      if (res.status === 200) {
        this.getData();
        this.isOpen = false
      }
    },

    async handleUpdate() {
      const data = {
        nama: this.formData.nama,
        email: this.formData.email,
        phone: this.formData.phone,
        alamat: this.formData.alamat
      }
      const res = await axios.patch(`http://127.0.0.1:8000/api/karyawan/${this.id}`, data)
      if (res.status) {
        this.getData()
        this.isOpen = false
      }
    },

    async handleDelete(id) {
      const res = await axios.delete(`http://127.0.0.1:8000/api/karyawan/${id}`)
      if (res.status) {
        this.getData()
      }
    }
  },
};
</script>
