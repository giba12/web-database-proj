<template>
  <div class="device-inventory">
    <h2>Device Inventory</h2>
    
    <form @submit.prevent="addDevice">
      <input v-model="newDevice.name" placeholder="Device Name" required />
      <input v-model="newDevice.model" placeholder="Model" />
      <input v-model="newDevice.serialNumber" placeholder="Serial Number" required />
      <input v-model="newDevice.assignedTo" placeholder="Assigned To" />
      <input v-model="newDevice.purchaseDate" type="date" />
      <select v-model="newDevice.status">
        <option>available</option>
        <option>assigned</option>
        <option>maintenance</option>
        <option>retired</option>
      </select>
      <button type="submit">Add Device</button>
    </form>

    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Model</th>
          <th>Serial</th>
          <th>Assigned To</th>
          <th>Purchase Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="device in devices" :key="device._id">
          <td>{{ device.name }}</td>
          <td>{{ device.model }}</td>
          <td>{{ device.serialNumber }}</td>
          <td>{{ device.assignedTo }}</td>
          <td>{{ new Date(device.purchaseDate).toLocaleDateString() }}</td>
          <td>{{ device.status }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      devices: [],
      newDevice: {
        name: '',
        model: '',
        serialNumber: '',
        assignedTo: '',
        purchaseDate: '',
        status: 'available',
      },
    };
  },
  methods: {
    async fetchDevices() {
      const res = await fetch('/api/devices');
      this.devices = await res.json();
    },
    async addDevice() {
      await fetch('/api/devices', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.newDevice),
      });
      this.newDevice = {
        name: '',
        model: '',
        serialNumber: '',
        assignedTo: '',
        purchaseDate: '',
        status: 'available',
      };
      this.fetchDevices();
    },
  },
  mounted() {
    this.fetchDevices();
  },
};
</script>

<style scoped>
.device-inventory {
  padding: 20px;
}
form input, form select {
  margin: 5px;
}
table {
  margin-top: 20px;
  border-collapse: collapse;
  width: 100%;
}
table, th, td {
  border: 1px solid #ddd;
}
th, td {
  padding: 8px;
}
</style>
