import React, { useState } from "react";
import {
  Box,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Collapse,
  Typography,
} from "@mui/material";

// project imports
import MainCard from "components/MainCard";

export default function MainOrderDetails() {
  const [formData, setFormData] = useState({
    orderid: "",
    custname: "",
    mobile: "",
    orderdate: "",
    email: "",
    address: "",
    placeOfOrder: "",
    orderType: "",
    product: "",
    measureType: "",
    occasion: "",
    season: "",
    timePeriod: "",
    paymentStatus: "",
    trialdate: "",
    deliverydate: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Form Submitted! Check console for data.");
  };

  const [open, setOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  // dummy row
  const row = {
    srNo: 1,
    product: "Shirt",
    quantity: 1,
    details: [
      { srNo: 1, piece: "Sleeve", note: "" },
      { srNo: 2, piece: "Collar", note: "" },
    ],
  };

  return (
    <MainCard title="Order Details">
      <form onSubmit={handleSubmit}>
        {/* 🔹 CSS Grid Layout for fields */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 2,
          }}
        >
          <TextField
            fullWidth
            label="Order ID"
            name="orderid"
            value={formData.orderid}
            onChange={handleChange}
            required
          />

          <TextField
            fullWidth
            label="Customer Name"
            name="custname"
            value={formData.custname}
            onChange={handleChange}
            required
          />

          <TextField
            fullWidth
            type="tel"
            label="Phone Number"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            inputProps={{ maxLength: 10, pattern: "[0-9]{10}" }}
            required
          />

          <TextField
            fullWidth
            type="date"
            label="Order date"
            name="orderdate"
            value={formData.orderdate}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
            required
          />

          <TextField
            fullWidth
            type="email"
            label="Email ID"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          {/* Address spans two columns */}
          <TextField
            fullWidth
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            sx={{ gridColumn: "span 2" }}
          />

          {/* Dropdowns */}
          <FormControl fullWidth>
            <InputLabel>Place of Order</InputLabel>
            <Select
              name="placeOfOrder"
              value={formData.placeOfOrder}
              onChange={handleChange}
            >
              <MenuItem value="online">Online</MenuItem>
              <MenuItem value="offline">Offline</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel>Order Type</InputLabel>
            <Select
              name="orderType"
              value={formData.orderType}
              onChange={handleChange}
            >
              <MenuItem value="individual">Individual</MenuItem>
              <MenuItem value="set">Set</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel>Measure Type</InputLabel>
            <Select
              name="measureType"
              value={formData.measureType}
              onChange={handleChange}
            >
              <MenuItem value="upper">Upper</MenuItem>
              <MenuItem value="jacket">Jacket</MenuItem>
              <MenuItem value="bottom">Bottom</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel>Product</InputLabel>
            <Select
              name="product"
              value={formData.product}
              onChange={handleChange}
            >
              <MenuItem value="shirt">Shirt</MenuItem>
              <MenuItem value="sherwani">Sherwani</MenuItem>
              <MenuItem value="jacket">Jacket</MenuItem>
              <MenuItem value="pant">Pant</MenuItem>
            </Select>
          </FormControl>

         
          <FormControl fullWidth>
            <InputLabel>Occasion</InputLabel>
            <Select
              name="occasion"
              value={formData.occasion}
              onChange={handleChange}
            >
              <MenuItem value="roka">Roka</MenuItem>
              <MenuItem value="tilak">Tilak</MenuItem>
              <MenuItem value="ganeshpooja">Ganesh Pooja</MenuItem>
              <MenuItem value="haldi">Haldi</MenuItem>
              <MenuItem value="mehendi">Mehendi</MenuItem>
              <MenuItem value="sangeet">Sangeet</MenuItem>
              <MenuItem value="varmala">Jaimala/Varmala</MenuItem>
              <MenuItem value="saptapadi">Saptapadi</MenuItem>
              <MenuItem value="vidaai">Vidaai</MenuItem>
              <MenuItem value="reception">Reception</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel>Season</InputLabel>
            <Select
              name="season"
              value={formData.season}
              onChange={handleChange}
            >
              <MenuItem value="spring">Spring</MenuItem>
              <MenuItem value="summer">Summer</MenuItem>
              <MenuItem value="autumn">Autumn</MenuItem>
              <MenuItem value="winter">Winter</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel>Time Period</InputLabel>
            <Select
              name="timePeriod"
              value={formData.timePeriod}
              onChange={handleChange}
            >
              <MenuItem value="morning">Morning</MenuItem>
              <MenuItem value="afternoon">Afternoon</MenuItem>
              <MenuItem value="evening">Evening</MenuItem>
              <MenuItem value="night">Night</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel>Payment Status</InputLabel>
            <Select
              name="paymentStatus"
              value={formData.paymentStatus}
              onChange={handleChange}
            >
              <MenuItem value="paid">Paid</MenuItem>
              <MenuItem value="advancepay">Advance Pay</MenuItem>
              <MenuItem value="unpaid">Unpaid</MenuItem>
            </Select>
          </FormControl>

          <TextField
            fullWidth
            type="date"
            label="Trial Date"
            name="trialdate"
            value={formData.trialdate}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
            required
          />

          <TextField
            fullWidth
            type="date"
            label="Delivery Date"
            name="deliverydate"
            value={formData.deliverydate}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
            required
          />
        </Box>

        {/* Table */}
        <Box mt={4}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Sr. No</TableCell>
                  <TableCell>Product</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>{row.srNo}</TableCell>
                  <TableCell>{row.product}</TableCell>
                  <TableCell>
                    <IconButton
                      size="small"
                      onClick={() => setQuantity(Math.max(0, quantity - 1))}
                    >
                      ➖
                    </IconButton>
                    {quantity.toString().padStart(2, "0")}
                    <IconButton
                      size="small"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      ➕
                    </IconButton>
                  </TableCell>
                  <TableCell>
                    <Button onClick={() => setOpen(!open)}>
                      {open ? "Hide" : "Expand"}
                    </Button>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell colSpan={4} sx={{ p: 0 }}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                      <Box sx={{ m: 2 }}>
                        <Typography variant="subtitle1">Details</Typography>
                        <Table size="small">
                          <TableHead>
                            <TableRow>
                              <TableCell>Sr. No</TableCell>
                              <TableCell>Piece</TableCell>
                              <TableCell>Note</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {row.details.map((detail) => (
                              <TableRow key={detail.srNo}>
                                <TableCell>{detail.srNo}</TableCell>
                                <TableCell>{detail.piece}</TableCell>
                                <TableCell>
                                  <input
                                    type="text"
                                    placeholder="Eg. Additional information"
                                    style={{
                                      width: "80%",
                                      padding: "6px 8px",
                                      border: "1px solid #ddd",
                                      borderRadius: "6px",
                                    }}
                                  />
                                  <Button size="small">📷</Button>
                                  <Button size="small">✏️</Button>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </Box>
                    </Collapse>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        {/* Buttons */}
        <Box sx={{ display: "flex", justifyContent: "end", gap: 2, mt: 3 }}>
          <Button variant="outlined" color="error">
            Cancel
          </Button>
          <Button variant="contained" color="primary" type="submit">
            Save
          </Button>
          <Button variant="contained" color="secondary">
            Save & Print
          </Button>
        </Box>
      </form>
    </MainCard>
  );
}
