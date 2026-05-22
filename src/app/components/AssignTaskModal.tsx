import { useState } from 'react';
import { X, Plus, Users, Trash2, CheckCircle2, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { Separator } from './ui/separator';

interface TaskItem {
  id: string;
  label: string;
  checked: boolean;
}

interface StaffMember {
  id: string;
  name: string;
  role: string;
  department: string;
  avatar: string;
}

interface Assignment {
  id: string;
  staffMember: StaffMember;
  tasks: TaskItem[];
  priority: 'high' | 'medium' | 'low';
  dueDate: string;
}

export default function AssignTaskModal() {
  const [domain, setDomain] = useState('Accounting');
  const [industry, setIndustry] = useState('Hospitality');
  const [category, setCategory] = useState('Accounting Services');
  const [selectedStaff, setSelectedStaff] = useState<string>('');
  const [priority, setPriority] = useState<'high' | 'medium' | 'low'>('medium');
  const [dueDate, setDueDate] = useState('');
  
  const [tasks, setTasks] = useState<TaskItem[]>([
    {
      id: 'accrual',
      label: 'Accrual and prepayment journal entries',
      checked: true
    },
    {
      id: 'tax-considerations',
      label: 'Address & Apply special tax considerations for medical billing, managed care contracts, & Government payer reimbursements.',
      checked: true
    },
    {
      id: 'bank-loan',
      label: 'Bank loan covenant compliance reporting',
      checked: true
    },
    {
      id: 'cam-expense',
      label: 'CAM expense allocation',
      checked: true
    },
    {
      id: 'capital-project',
      label: 'Capital project cost tracking',
      checked: true
    },
    {
      id: 'business-expenses',
      label: 'Deduct allowable business expenses: fuel, maintenance, labor, lease/rental of fleet, insurance, tolls, permits, depreciation, & General.',
      checked: false
    },
    {
      id: 'payroll-taxes',
      label: 'Deduct & Remit payroll taxes accurately, federal, state, local taxes, Social Security, Medicare, unemployment insurance.',
      checked: false
    },
    {
      id: 'escrow-trust',
      label: 'Escrow & trust accounting',
      checked: false
    },
    {
      id: 'hoa-condo',
      label: 'HOA/Condo financial management and dues tracking',
      checked: false
    },
    {
      id: 'intercompany',
      label: 'Intercompany rent allocations (for owners with multiple entities)',
      checked: false
    },
    {
      id: 'loan-interest',
      label: 'Loan interest & amortization schedules',
      checked: false
    }
  ]);

  const [assignments, setAssignments] = useState<Assignment[]>([]);

  const staffMembers: StaffMember[] = [
    { id: '1', name: 'Sarah Johnson', role: 'Senior Accountant', department: 'Accounting', avatar: 'SJ' },
    { id: '2', name: 'Michael Chen', role: 'Tax Specialist', department: 'Tax', avatar: 'MC' },
    { id: '3', name: 'Emily Rodriguez', role: 'Financial Analyst', department: 'Finance', avatar: 'ER' },
    { id: '4', name: 'David Kim', role: 'Junior Accountant', department: 'Accounting', avatar: 'DK' },
    { id: '5', name: 'Lisa Anderson', role: 'Compliance Officer', department: 'Compliance', avatar: 'LA' }
  ];

  const handleTaskToggle = (taskId: string) => {
    setTasks(prev => prev.map(task => 
      task.id === taskId ? { ...task, checked: !task.checked } : task
    ));
  };

  const handleSelectAll = () => {
    const allChecked = tasks.every(task => task.checked);
    setTasks(prev => prev.map(task => ({ ...task, checked: !allChecked })));
  };

  const handleReset = () => {
    setTasks(prev => prev.map(task => ({ ...task, checked: false })));
    setSelectedStaff('');
    setPriority('medium');
    setDueDate('');
  };

  const handleAddAssignment = () => {
    if (!selectedStaff) return;
    
    const staffMember = staffMembers.find(staff => staff.id === selectedStaff);
    const selectedTasks = tasks.filter(task => task.checked);
    
    if (!staffMember || selectedTasks.length === 0) return;

    const newAssignment: Assignment = {
      id: `assignment-${Date.now()}`,
      staffMember,
      tasks: selectedTasks,
      priority,
      dueDate: dueDate || new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0] // Default to 1 week
    };

    setAssignments(prev => [...prev, newAssignment]);
    
    // Reset selections
    setTasks(prev => prev.map(task => ({ ...task, checked: false })));
    setSelectedStaff('');
    setPriority('medium');
    setDueDate('');
  };

  const handleRemoveAssignment = (assignmentId: string) => {
    setAssignments(prev => prev.filter(assignment => assignment.id !== assignmentId));
  };

  const handleFinalAssign = () => {
    console.log('Final assignments:', assignments);
    // Handle final assignment logic here
  };

  const selectedTasksCount = tasks.filter(task => task.checked).length;
  const totalAssignments = assignments.reduce((total, assignment) => total + assignment.tasks.length, 0);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-blue-600 text-white px-6 py-4 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-medium">Assign Multiple Tasks</h2>
          <p className="text-blue-100 text-sm mt-1">
            Select tasks and assign them to multiple staff members
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-blue-100 text-sm">
            {totalAssignments} tasks assigned to {assignments.length} staff
          </div>
          <Button variant="ghost" size="icon" className="text-white hover:bg-blue-700">
            <X className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="flex">
        {/* Left Panel - Task Selection */}
        <div className="flex-1 p-6 border-r border-gray-200">
          {/* Dropdown Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="space-y-2">
              <Label className="text-sm text-gray-600">Domain</Label>
              <Select value={domain} onValueChange={setDomain}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Accounting">Accounting</SelectItem>
                  <SelectItem value="Finance">Finance</SelectItem>
                  <SelectItem value="Tax">Tax</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label className="text-sm text-gray-600">Industry</Label>
              <Select value={industry} onValueChange={setIndustry}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Hospitality">Hospitality</SelectItem>
                  <SelectItem value="Healthcare">Healthcare</SelectItem>
                  <SelectItem value="Technology">Technology</SelectItem>
                  <SelectItem value="Manufacturing">Manufacturing</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label className="text-sm text-gray-600">Category</Label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Accounting Services">Accounting Services</SelectItem>
                  <SelectItem value="Tax Services">Tax Services</SelectItem>
                  <SelectItem value="Consulting">Consulting</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Task Selection Header */}
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium text-gray-900">Select Tasks ({selectedTasksCount} selected)</h3>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleSelectAll}
              className="text-xs"
            >
              {tasks.every(task => task.checked) ? 'Deselect All' : 'Select All'}
            </Button>
          </div>

          {/* Tasks List */}
          <div className="space-y-2 mb-6 max-h-96 overflow-y-auto scrollbar-hide">
            {tasks.map((task) => (
              <div key={task.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <Checkbox
                  id={task.id}
                  checked={task.checked}
                  onCheckedChange={() => handleTaskToggle(task.id)}
                  className="mt-0.5"
                />
                <Label 
                  htmlFor={task.id}
                  className="flex-1 text-sm text-gray-700 leading-relaxed cursor-pointer"
                >
                  {task.label}
                </Label>
              </div>
            ))}
          </div>

          {/* Assignment Section */}
          <Card className="p-4 bg-gray-50">
            <h4 className="font-medium text-gray-900 mb-4">Assign Selected Tasks</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="space-y-2">
                <Label className="text-sm text-gray-600">Staff Member</Label>
                <Select value={selectedStaff} onValueChange={setSelectedStaff}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select staff member" />
                  </SelectTrigger>
                  <SelectContent>
                    {staffMembers.map(staff => (
                      <SelectItem key={staff.id} value={staff.id}>
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs">
                            {staff.avatar}
                          </div>
                          <span>{staff.name} - {staff.role}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-sm text-gray-600">Priority</Label>
                <Select value={priority} onValueChange={(value: 'high' | 'medium' | 'low') => setPriority(value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="high">High Priority</SelectItem>
                    <SelectItem value="medium">Medium Priority</SelectItem>
                    <SelectItem value="low">Low Priority</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2 mb-4">
              <Label className="text-sm text-gray-600">Due Date</Label>
              <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                min={new Date().toISOString().split('T')[0]}
              />
            </div>

            <Button 
              onClick={handleAddAssignment}
              disabled={!selectedStaff || selectedTasksCount === 0}
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Assignment ({selectedTasksCount} tasks)
            </Button>
          </Card>
        </div>

        {/* Right Panel - Assignment Preview */}
        <div className="w-96 p-6 bg-gray-50">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium text-gray-900 flex items-center">
              <Users className="h-4 w-4 mr-2" />
              Assignment Preview
            </h3>
            {assignments.length > 0 && (
              <Badge variant="secondary">{assignments.length} staff</Badge>
            )}
          </div>

          {assignments.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <Clock className="h-12 w-12 mx-auto mb-3 text-gray-300" />
              <p className="text-sm">No assignments yet</p>
              <p className="text-xs text-gray-400 mt-1">Select tasks and staff to create assignments</p>
            </div>
          ) : (
            <div className="space-y-4 mb-6 max-h-96 overflow-y-auto scrollbar-hide">
              {assignments.map((assignment) => (
                <Card key={assignment.id} className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm">
                        {assignment.staffMember.avatar}
                      </div>
                      <div>
                        <p className="font-medium text-sm">{assignment.staffMember.name}</p>
                        <p className="text-xs text-gray-500">{assignment.staffMember.role}</p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleRemoveAssignment(assignment.id)}
                      className="h-6 w-6 text-gray-400 hover:text-red-500"
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                  
                  <div className="flex items-center space-x-2 mb-2">
                    <Badge className={getPriorityColor(assignment.priority)}>
                      {assignment.priority}
                    </Badge>
                    <span className="text-xs text-gray-500">Due: {assignment.dueDate}</span>
                  </div>
                  
                  <p className="text-xs text-gray-600 mb-2">
                    {assignment.tasks.length} task{assignment.tasks.length !== 1 ? 's' : ''}:
                  </p>
                  <div className="space-y-1">
                    {assignment.tasks.slice(0, 2).map((task) => (
                      <p key={task.id} className="text-xs text-gray-700 truncate">
                        • {task.label}
                      </p>
                    ))}
                    {assignment.tasks.length > 2 && (
                      <p className="text-xs text-gray-500">
                        + {assignment.tasks.length - 2} more tasks
                      </p>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          )}

          {/* Footer Actions */}
          <div className="space-y-3">
            <Separator />
            <div className="flex space-x-2">
              <Button variant="outline" onClick={handleReset} className="flex-1">
                Reset All
              </Button>
              <Button 
                onClick={handleFinalAssign}
                disabled={assignments.length === 0}
                className="flex-1 bg-green-600 hover:bg-green-700"
              >
                <CheckCircle2 className="h-4 w-4 mr-2" />
                Assign All
              </Button>
            </div>
            
            {assignments.length > 0 && (
              <p className="text-xs text-gray-500 text-center">
                Ready to assign {totalAssignments} tasks to {assignments.length} staff members
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}