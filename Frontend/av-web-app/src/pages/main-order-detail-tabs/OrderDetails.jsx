import React, { useState } from "react";
import axios from "axios";
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
    Grid,
    Checkbox,
    ListItemText,
  } from "@mui/material";
  import {
    DownOutlined,
    UpOutlined,
    PlusOutlined,
    MinusOutlined,
    CameraOutlined,
    LinkOutlined,
  } from "@ant-design/icons";
  import MainCard from "components/MainCard";

  export default function OrderDetails() {
    const [formData, setFormData] = useState({
      orderid: "",
      custname: "",
      mobile: "",
      orderdate: "",
      email: "",
      address: "",
      placeOfOrder: "",
      orderType: "",
      products: [], // array of selected products
      measureType: "",
      occasion: "",
      season: "",
      timePeriod: "",
      paymentStatus: "",
      trialdate: "",
      deliverydate: "",
    });

  const [expandedRows, setExpandedRows] = useState({});
    const [quantities, setQuantities] = useState({
      1: 2,
      2: 2,
      3: 1,
      4: 4,
    });

    const handleChange = (e) => {
      const { name, value, files } = e.target;
      if (name === "products") {
        setFormData({
          ...formData,
          products: typeof value === "string" ? value.split(",") : value,
        });
      } else {
        setFormData({
          ...formData,
          [name]: files ? files[0] : value,
        });
      }
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      // Save order data via API
      axios.post("https://localhost:44301/api/Order/addNewOrder", formData)
        .then((response) => {
          alert("Order saved successfully!");
          // Optionally handle response, e.g., reset form or redirect
        })
        .catch((error) => {
          console.error("Error saving order:", error);
          alert("Failed to save order. Please try again.");
        });
    };

    const toggleRow = (rowId) => {
      setExpandedRows((prev) => ({
        ...prev,
        [rowId]: !prev[rowId],
      }));
    };

    const updateQuantity = (rowId, increment) => {
      setQuantities((prev) => ({
        ...prev,
        [rowId]: Math.max(1, prev[rowId] + increment),
      }));
    };

    // Product data
    const products = [
      {
        id: 1,
        srNo: "01",
        product: "Shirt",
        quantity: quantities[1],
        details: [
          { srNo: "01", piece: "Shirt", note: "" },
          { srNo: "02", piece: "Shirt", note: "" },
        ],
      },
      {
        id: 2,
        srNo: "02",
        product: "Sherwani",
        quantity: quantities[2],
        details: [
          { srNo: "01", piece: "Sherwani", note: "" },
          { srNo: "02", piece: "Sherwani", note: "" },
        ],
      },
      {
        id: 3,
        srNo: "03",
        product: "Jacket",
        quantity: quantities[3],
        details: [{ srNo: "01", piece: "Jacket", note: "" }],
      },
      {
        id: 4,
        srNo: "04",
        product: "Pant",
        quantity: quantities[4],
        details: [
          { srNo: "01", piece: "Pant", note: "" },
          { srNo: "02", piece: "Pant", note: "" },
          { srNo: "03", piece: "Pant", note: "" },
          { srNo: "04", piece: "Pant", note: "" },
        ],
      },
    ];

    return (
      <MainCard title="Order Details">
        <form onSubmit={handleSubmit}>
          {/* Order Details Section */}
          <Box sx={{ mb: 4 }}>
            <Grid container spacing={2} sx={{ mb: 2 }}>
              <Grid size={2}>
                <TextField fullWidth label="Order ID" name="orderid" value={formData.orderid} onChange={handleChange} size="small" />
              </Grid>
              <Grid size={3}>
                <TextField fullWidth label="Customer Name" name="custname" value={formData.custname} onChange={handleChange} size="small" />
              </Grid>
              <Grid size={2}>
                <TextField fullWidth type="tel" label="Phone No." name="mobile" value={formData.mobile} onChange={handleChange} size="small" />
              </Grid>
              <Grid size={2}>
                <TextField fullWidth type="date" label="Order date" name="orderdate" value={formData.orderdate} onChange={handleChange} InputLabelProps={{ shrink: true }} size="small" />
              </Grid>
              <Grid size={3}>
                <TextField fullWidth type="email" label="Email ID" name="email" value={formData.email} onChange={handleChange} size="small" />
              </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ mb: 2 }}>
              <Grid size={4}>
                <TextField fullWidth label="Address" name="address" value={formData.address} onChange={handleChange} size="small" />
              </Grid>
              <Grid size={2}>
                <FormControl fullWidth size="small">
                  <InputLabel>Place Of Order</InputLabel>
                  <Select name="placeOfOrder" value={formData.placeOfOrder} onChange={handleChange} label="Place Of Order">
                    <MenuItem value="online">Online</MenuItem>
                    <MenuItem value="offline">Offline</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid size={2}>
                <FormControl fullWidth size="small">
                  <InputLabel>Order Type</InputLabel>
                  <Select name="orderType" value={formData.orderType} onChange={handleChange} label="Order Type">
                    <MenuItem value="individual">Individual</MenuItem>
                    <MenuItem value="set">Set</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid size={2}>
                <FormControl fullWidth size="small">
                  <InputLabel>Measure Types</InputLabel>
                  <Select name="measureType" value={formData.measureType} onChange={handleChange} label="Measure Types">
                    <MenuItem value="upper">Upper</MenuItem>
                    <MenuItem value="jacket">Jacket</MenuItem>
                    <MenuItem value="bottom">Bottom</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid size={2}>
                <FormControl fullWidth size="small">
                  <InputLabel>Product</InputLabel>
                  <Select
                    name="products"
                    multiple
                    value={formData.products}
                    onChange={handleChange}
                    label="Product"
                    renderValue={(selected) => selected.join(", ")}
                  >
                    {[
                      { value: "shirt", label: "Shirt" },
                      { value: "sherwani", label: "Sherwani" },
                      { value: "jacket", label: "Jacket" },
                      { value: "pant", label: "Pant" },
                    ].map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        <Checkbox checked={formData.products.indexOf(option.value) > -1} />
                        <ListItemText primary={option.label} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              
            </Grid>
            <Grid container spacing={2}>
              <Grid size={2}>
                <FormControl fullWidth size="small">
                  <InputLabel>Select Occasion</InputLabel>
                  <Select name="occasion" value={formData.occasion} onChange={handleChange} label="Select Occasion">
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
              </Grid>
              <Grid size={2}>
                <FormControl fullWidth size="small">
                  <InputLabel>Select Season</InputLabel>
                  <Select name="season" value={formData.season} onChange={handleChange} label="Select Season">
                    <MenuItem value="spring">Spring</MenuItem>
                    <MenuItem value="summer">Summer</MenuItem>
                    <MenuItem value="autumn">Autumn</MenuItem>
                    <MenuItem value="winter">Winter</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid size={2}>
                <FormControl fullWidth size="small">
                  <InputLabel>Select Time Period</InputLabel>
                  <Select name="timePeriod" value={formData.timePeriod} onChange={handleChange} label="Select Time Period">
                    <MenuItem value="morning">Morning</MenuItem>
                    <MenuItem value="afternoon">Afternoon</MenuItem>
                    <MenuItem value="evening">Evening</MenuItem>
                    <MenuItem value="night">Night</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid size={2}>
                <FormControl fullWidth size="small">
                  <InputLabel>Payment status</InputLabel>
                  <Select name="paymentStatus" value={formData.paymentStatus} onChange={handleChange} label="Payment status">
                    <MenuItem value="paid">Paid</MenuItem>
                    <MenuItem value="advancepay">Advance Pay</MenuItem>
                    <MenuItem value="unpaid">Unpaid</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid size={2}>
                <TextField fullWidth type="date" label="Trial Date" name="trialdate" value={formData.trialdate} onChange={handleChange} InputLabelProps={{ shrink: true }} size="small" />
              </Grid>
              <Grid size={2}>
                <TextField fullWidth type="date" label="Delivery Date" name="deliverydate" value={formData.deliverydate} onChange={handleChange} InputLabelProps={{ shrink: true }} size="small" />
              </Grid>
            </Grid>
          </Box>
          {/* Product List Section - only show if at least one product is selected */}
          {formData.products.length > 0 && (
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
                Product List
              </Typography>
              <TableContainer component={Paper} sx={{ boxShadow: 2 }}>
                <Table>
                  <TableHead>
                    <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                      <TableCell sx={{ fontWeight: "bold" }}>Sr. No</TableCell>
                      <TableCell sx={{ fontWeight: "bold" }}>Products</TableCell>
                      <TableCell sx={{ fontWeight: "bold" }}>Quantity</TableCell>
                      <TableCell sx={{ fontWeight: "bold" }}>Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {products
                      .filter((product) => formData.products.includes(product.product.toLowerCase()))
                      .map((product) => (
                        <React.Fragment key={product.id}>
                          <TableRow>
                            <TableCell>{product.srNo}</TableCell>
                            <TableCell>{product.product}</TableCell>
                            <TableCell>
                              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                <IconButton size="small" onClick={() => updateQuantity(product.id, -1)}>
                                  <MinusOutlined />
                                </IconButton>
                                <TextField value={quantities[product.id].toString().padStart(2, "0")} size="small" sx={{ width: "60px", "& .MuiInputBase-input": { textAlign: "center" } }} inputProps={{ readOnly: true }} />
                                <IconButton size="small" onClick={() => updateQuantity(product.id, 1)}>
                                  <PlusOutlined />
                                </IconButton>
                              </Box>
                            </TableCell>
                            <TableCell>
                              <Button variant="contained" size="small" onClick={() => toggleRow(product.id)} endIcon={expandedRows[product.id] ? <UpOutlined /> : <DownOutlined />}>Expand</Button>
                            </TableCell>
                          </TableRow>
                          {/* Expanded Details */}
                          <TableRow>
                            <TableCell colSpan={4} sx={{ p: 0, border: 0 }}>
                              <Collapse in={expandedRows[product.id]} timeout="auto" unmountOnExit>
                                <Box sx={{ m: 2, ml: 4 }}>
                                  <Table size="small">
                                    <TableHead>
                                      <TableRow sx={{ backgroundColor: "#fafafa" }}>
                                        <TableCell sx={{ fontWeight: "bold" }}>Sr. No</TableCell>
                                        <TableCell sx={{ fontWeight: "bold" }}>Piece</TableCell>
                                        <TableCell sx={{ fontWeight: "bold" }}>Note</TableCell>
                                      </TableRow>
                                    </TableHead>
                                    <TableBody>
                                      {product.details.map((detail) => (
                                        <TableRow key={detail.srNo}>
                                          <TableCell>{detail.srNo}</TableCell>
                                          <TableCell>{detail.piece}</TableCell>
                                          <TableCell>
                                            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                              <TextField size="small" placeholder="Eg. Additional information" sx={{ flexGrow: 1 }} />
                                              <IconButton size="small">
                                                <CameraOutlined />
                                              </IconButton>
                                              <IconButton size="small">
                                                <LinkOutlined />
                                              </IconButton>
                                            </Box>
                                          </TableCell>
                                        </TableRow>
                                      ))}
                                    </TableBody>
                                  </Table>
                                </Box>
                              </Collapse>
                            </TableCell>
                          </TableRow>
                        </React.Fragment>
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          )}
          {/* Action Buttons */}
          <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
            <Button variant="outlined">Cancel</Button>
            <Button variant="outlined">Save</Button>
            <Button variant="contained">Save & Print</Button>
          </Box>
        </form>
      </MainCard>
    );
  }
                       