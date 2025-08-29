import * as React from "react";
import { Link } from 'react-router-dom';
import { DataGrid } from "@mui/x-data-grid";
import {
    Box,
    Typography,
    TextField,
    Button,
    IconButton,
    Tooltip,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import jsPDF from "jspdf";
import "jspdf-autotable";
import dayjs from "dayjs";

// Icons
import { FilePdfOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

import Orderdetails from '../main-order-detail-tabs/OrderDetails';

export default function OrderTable() {
    // Sample data rows (kept in state so we can delete dynamically)
    const [rows, setRows] = React.useState([
        {
            id: 1,
            orderid: "A569",
            name: "Sanjay Raut",
            placeoforder: "Online",
            ordercreated: "Shivam",
            numberofproduct: "05",
            paymentstatus: "Paid",
            trialdate: "2025-07-15",
            deliverydate: "2025-07-15",
        },
        {
            id: 2,
            orderid: "A570",
            name: "Amit Sharma",
            placeoforder: "In-Store",
            ordercreated: "Rohit",
            numberofproduct: "02",
            paymentstatus: "Pending",
            trialdate: "2025-07-20",
            deliverydate: "2025-07-25",
        },
        {
            id: 3,
            orderid: "A571",
            name: "Neha Verma",
            placeoforder: "Online",
            ordercreated: "Shivam",
            numberofproduct: "01",
            paymentstatus: "Paid",
            trialdate: "2025-07-22",
            deliverydate: "2025-07-28",
        },
        {
            id: 4,
            orderid: "A572",
            name: "Raj Patel",
            placeoforder: "In-Store",
            ordercreated: "Aman",
            numberofproduct: "04",
            paymentstatus: "Paid",
            trialdate: "2025-07-25",
            deliverydate: "2025-07-30",
        },
    ]);

    // Action handlers
    const handleRowPdf = (row) => {
        const doc = new jsPDF();
        doc.text(`Order ID: ${row.orderid}`, 14, 20);
        doc.text(`Client: ${row.name}`, 14, 30);
        doc.text(`Place: ${row.placeoforder}`, 14, 40);
        doc.text(`Payment: ${row.paymentstatus}`, 14, 50);
        doc.save(`order_${row.orderid}.pdf`);
    };

    const handleRowEdit = (row) => {
        alert(`Edit Order: ${row.orderid} - ${row.name}`);
    };

    const handleRowDelete = (row) => {
        if (window.confirm(`Are you sure you want to delete Order ${row.orderid}?`)) {
            setRows((prevRows) => prevRows.filter((r) => r.id !== row.id));
        }
    };

    // Define columns (with action buttons)
    const columns = [
        { field: "orderid", headerName: "Order ID", width: 80 },
        { field: "name", headerName: "Client Name", width: 100 },
        { field: "placeoforder", headerName: "Place Of Order", width: 100 },
        { field: "ordercreated", headerName: "Order Created", width: 100 },
        { field: "numberofproduct", headerName: "No Of Product", width: 100 },
        { field: "paymentstatus", headerName: "Payment Status", width: 120 },
        { field: "trialdate", headerName: "Trial Date", width: 100 },
        { field: "deliverydate", headerName: "Delivery Date", width: 100 },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            sortable: false,
            renderCell: (params) => (
                <Box display="flex" gap={1}>
                    <Tooltip title="Download PDF">
                        <IconButton
                            size="small"
                            color="primary"
                            onClick={() => handleRowPdf(params.row)}
                        >
                            <FilePdfOutlined fontSize="small" />
                        </IconButton>
                    </Tooltip>

                    <Tooltip title="Edit">
                        <IconButton
                            size="small"
                            color="secondary"
                            onClick={() => handleRowEdit(params.row)}
                        >
                            <EditOutlined fontSize="small" />
                        </IconButton>
                    </Tooltip>

                    <Tooltip title="Delete">
                        <IconButton
                            size="small"
                            color="error"
                            onClick={() => handleRowDelete(params.row)}
                        >
                            <DeleteOutlined fontSize="small" />
                        </IconButton>
                    </Tooltip>
                </Box>
            ),
        },
    ];

    // States
    const [searchText, setSearchText] = React.useState("");
    const [selectedDate, setSelectedDate] = React.useState(null);
    const [selectedRows, setSelectedRows] = React.useState([]);

    // Filtered rows
    const filteredRows = rows.filter((row) => {
        const searchLower = searchText.toLowerCase();
        const matchesSearch = Object.values(row).some((val) =>
            String(val).toLowerCase().includes(searchLower)
        );

        const matchesDate = selectedDate
            ? dayjs(row.trialdate).isSame(selectedDate, "day") ||
            dayjs(row.deliverydate).isSame(selectedDate, "day")
            : true;

        return matchesSearch && matchesDate;
    });

    // PDF Download (whole table)
    const downloadPDF = () => {
        const doc = new jsPDF();
        doc.text("Orders Table", 14, 15);
        doc.autoTable({
            head: [columns.filter((c) => c.field !== "action").map((col) => col.headerName)],
            body: filteredRows.map((row) =>
                columns
                    .filter((c) => c.field !== "action")
                    .map((col) => row[col.field] ?? "")
            ),
        });
        doc.save("orders-form-details.pdf");
    };

    return (
        <Box sx={{ height: "auto", width: "100%" }}>
            {/* Controls */}
            <Box display="flex" justifyContent="flex-end" gap={2} mb={2}>
                {/* Search */}
                <TextField
                    label="Search"
                    variant="outlined"
                    size="small"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />

                {/* Date Picker */}
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label="Filter by Date"
                        value={selectedDate}
                        onChange={(newDate) => setSelectedDate(newDate)}
                        slotProps={{ textField: { size: "small" } }}
                    />
                </LocalizationProvider>

                {/* PDF Button */}
                <Button variant="outlined" color="secondary" onClick={downloadPDF}>
                    Download PDF
                </Button>

                {/* Custom Button */}
                <Button
                    component={Link}
                    to='/OrderDetails'
                    variant="contained"
                    color="primary"
                >
                    Add New
                </Button>
            </Box>

            {/* DataGrid */}
            <DataGrid
                rows={filteredRows}
                columns={columns}
                pageSizeOptions={[5]}
                initialState={{
                    pagination: { paginationModel: { pageSize: 5, page: 0 } },
                }}
                disableRowSelectionOnClick
                checkboxSelection
                onRowSelectionModelChange={(ids) => setSelectedRows(ids)}
            />
        </Box>
    );
}
