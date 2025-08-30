"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";

import {
  SlidersHorizontal,
  Download,
  ChevronDown,
  Plus,
  Search,
  Pencil,
  Copy,
  Trash2,
  MoreVertical,
  Star,
  Utensils,
  Plane,
  Tv,
  Ticket,
} from "lucide-react";

const TYPE_ICON = {
  Restaurant: Utensils,
  Holiday: Plane,
  Streaming: Tv,
  "Live Show": Ticket,
};

// Sample partner data
const partners = [
  {
    id: "p1",
    name: "Gourmet Dining Co",
    type: "Restaurant",
    status: "active",
    rating: 4.8,
    dateAdded: "2024-01-15",
    logo: "https://via.placeholder.com/40",
  },
  {
    id: "p2",
    name: "Adventure Tours",
    type: "Holiday",
    status: "active",
    rating: 4.6,
    dateAdded: "2024-01-12",
    logo: "https://via.placeholder.com/40",
  },
  {
    id: "p3",
    name: "City Events Hub",
    type: "Live Show",
    status: "pending",
    rating: 4.5,
    dateAdded: "2024-01-10",
    logo: "https://via.placeholder.com/40",
  },
  {
    id: "p4",
    name: "StreamnFlix Plus",
    type: "Streaming",
    status: "suspended",
    rating: 4.2,
    dateAdded: "2024-01-08",
    logo: "https://via.placeholder.com/40",
  },
  {
    id: "p5",
    name: "Local Bistro",
    type: "Restaurant",
    status: "active",
    rating: 4.7,
    dateAdded: "2024-01-05",
    logo: "https://via.placeholder.com/40",
  },
];

const StatusPill = ({ status }) => {
  const colors = {
    active: "bg-emerald-100 text-emerald-700",
    pending: "bg-amber-100 text-amber-700",
    suspended: "bg-red-100 text-red-700",
  };
  const label =
    status === "active"
      ? "Active"
      : status === "pending"
      ? "Pending"
      : "Suspended";

  return (
    <span
      className={`px-3 py-1 text-xs font-medium rounded-full ${colors[status]}`}
    >
      {label}
    </span>
  );
};

function Toolbar({ search, setSearch, filters, setFilters, selected }) {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between bg-white p-5 rounded-tl-lg rounded-tr-lg">
      <div className="flex items-center gap-2">
        <div className="relative">
          <Search className="pointer-events-none absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search partners..."
            className="w-[260px] pl-8"
            aria-label="Search partners"
          />
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="gap-2 bg-transparent">
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-52">
            <DropdownMenuLabel>Status</DropdownMenuLabel>
            <DropdownMenuCheckboxItem
              checked={filters.active}
              onCheckedChange={(v) =>
                setFilters((f) => ({ ...f, active: Boolean(v) }))
              }
            >
              Active
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={filters.pending}
              onCheckedChange={(v) =>
                setFilters((f) => ({ ...f, pending: Boolean(v) }))
              }
            >
              Pending
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={filters.suspended}
              onCheckedChange={(v) =>
                setFilters((f) => ({ ...f, suspended: Boolean(v) }))
              }
            >
              Suspended
            </DropdownMenuCheckboxItem>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Type</DropdownMenuLabel>
            {["Restaurant", "Holiday", "Live Show", "Streaming"].map((t) => (
              <DropdownMenuCheckboxItem
                key={t}
                checked={filters.types.includes(t)}
                onCheckedChange={(v) =>
                  setFilters((f) => {
                    const set = new Set(f.types);
                    if (v) set.add(t);
                    else set.delete(t);
                    return { ...f, types: Array.from(set) };
                  })
                }
              >
                {t}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <Button variant="outline" className="gap-2 bg-transparent">
          <Download className="h-4 w-4" />
          Export
        </Button>
      </div>

      <div className="flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" className="gap-2">
              Bulk Actions
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem
              disabled={selected.size === 0}
              //   onClick={() =>
              //     toast({
              //       title: "Archived",
              //       description: `${selected.size} partners archived.`,
              //     })
              //   }
            >
              Archive selected
            </DropdownMenuItem>
            <DropdownMenuItem
              disabled={selected.size === 0}
              //   onClick={() =>
              //     toast({
              //       title: "Deleted",
              //       description: `${selected.size} partners deleted.`,
              //     })
              //   }
            >
              Delete selected
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button className="gap-2 bg-rose-500 text-white hover:bg-rose-500/90">
          <Plus className="h-4 w-4" />
          Add New Partner
        </Button>
      </div>
    </div>
  );
}

export default function PartnersTable() {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    active: true,
    pending: true,
    suspended: true,
    types: [],
  });
  const [selected, setSelected] = useState(new Set());

  const rows = useMemo(() => {
    const q = search.trim().toLowerCase();
    return partners
      .filter((p) => filters[p.status])
      .filter((p) =>
        filters.types.length ? filters.types.includes(p.type) : true
      )
      .filter((p) =>
        q
          ? p.name.toLowerCase().includes(q) || p.type.toLowerCase().includes(q)
          : true
      );
  }, [search, filters]);

  const visibleIds = rows.map((r) => r.id);
  const allChecked =
    visibleIds.length > 0 && visibleIds.every((id) => selected.has(id));

  return (
    <div className="py-5">
      {/* Toolbar */}
      <Toolbar
        search={search}
        setSearch={setSearch}
        filters={filters}
        setFilters={setFilters}
        selected={selected}
      />

      {/* Table */}
      <div className=" overflow-x-auto border  bg-white  shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-rose-500 text-left text-white">
              <th className="p-3 w-10">
                <input type="checkbox" className="rounded" />
              </th>
              <th className="p-3">Partner</th>
              <th className="p-3">Partner Type</th>
              <th className="p-3">Status</th>
              <th className="p-3">Rating</th>
              <th className="p-3">Date Added</th>
              <th className="p-3 text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {rows.map((p) => {
              const Icon = TYPE_ICON[p.type];
              return (
                <tr
                  key={p.id}
                  className="border-t hover:bg-gray-50 transition-colors"
                >
                  <td className="p-3">
                    <input type="checkbox" className="rounded" />
                  </td>

                  <td className="p-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={p.logo}
                        alt={p.name}
                        className="h-8 w-8 rounded-md object-cover"
                      />
                      <div>
                        <p className="font-medium">{p.name}</p>
                        <p className="text-xs text-gray-500">ID: {p.id}</p>
                      </div>
                    </div>
                  </td>

                  <td className="p-3">
                    <div className="flex items-center gap-2">
                      <Icon className="h-4 w-4 text-rose-500" />
                      {p.type}
                    </div>
                  </td>

                  <td className="p-3">
                    <StatusPill status={p.status} />
                  </td>

                  <td className="p-3">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
                      {p.rating}
                    </div>
                  </td>

                  <td className="p-3 text-gray-500">
                    {new Date(p.dateAdded).toLocaleDateString("en-US")}
                  </td>

                  <td className="p-3 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <button className="p-2 hover:bg-gray-100 rounded">
                        <Pencil className="h-4 w-4" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded">
                        <Copy className="h-4 w-4" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded">
                        <Trash2 className="h-4 w-4" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded">
                        <MoreVertical className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}

            {rows.length === 0 && (
              <tr>
                <td
                  colSpan={7}
                  className="p-6 text-center text-gray-500 text-sm"
                >
                  No partners found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
