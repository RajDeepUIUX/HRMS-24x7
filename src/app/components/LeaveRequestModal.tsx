import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { Calendar, CalendarDays, Clock, User, FileText, AlertCircle } from 'lucide-react';

type LeaveStatus = 'pending' | 'approved' | 'rejected';
type LeaveType = 'Annual' | 'Sick' | 'Unpaid' | 'Personal' | 'Maternity' | 'Paternity';

interface LeaveRequest {
  id: number;
  staffName: string;
  avatar: string;
  startDate: string;
  endDate: string;
  days: string;
  leaveType: LeaveType;
  status: LeaveStatus;
  reason?: string;
  appliedDate?: string;
  approvedBy?: string;
  comments?: string;
}

interface LeaveRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  request: LeaveRequest | null;
  mode: 'view' | 'edit' | 'approve';
  onSave?: (request: LeaveRequest) => void;
  onApprove?: (requestId: number, status: LeaveStatus, comments?: string) => void;
}

const StatusBadge: React.FC<{ status: LeaveStatus }> = ({ status }) => {
  const statusConfig = {
    pending: {
      bg: "bg-[#fffaeb]",
      border: "border-[#fee4e2]",
      text: "text-[#f79009]",
      label: "Pending",
      icon: <Clock className="w-3 h-3" />
    },
    approved: {
      bg: "bg-[#ecfdf3]",
      border: "border-[#ecfdf3]",
      text: "text-[#12b76a]",
      label: "Approved",
      icon: <span className="w-3 h-3 rounded-full bg-[#12b76a] inline-block"></span>
    },
    rejected: {
      bg: "bg-[#fef3f2]",
      border: "border-[#fee4e2]",
      text: "text-[#d92d20]",
      label: "Rejected",
      icon: <AlertCircle className="w-3 h-3" />
    }
  };

  const config = statusConfig[status];

  return (
    <div className={`${config.bg} ${config.border} border rounded-lg px-3 py-2 inline-flex items-center gap-2`}>
      {config.icon}
      <span className={`${config.text} text-sm font-medium`}>
        {config.label}
      </span>
    </div>
  );
};

export default function LeaveRequestModal({ 
  isOpen, 
  onClose, 
  request, 
  mode,
  onSave,
  onApprove 
}: LeaveRequestModalProps) {
  const [editedRequest, setEditedRequest] = useState<LeaveRequest | null>(request);
  const [approvalStatus, setApprovalStatus] = useState<LeaveStatus>('approved');
  const [approvalComments, setApprovalComments] = useState('');

  React.useEffect(() => {
    setEditedRequest(request);
  }, [request]);

  if (!request) return null;

  const handleSave = () => {
    if (editedRequest && onSave) {
      onSave(editedRequest);
    }
    onClose();
  };

  const handleApproval = () => {
    if (onApprove) {
      onApprove(request.id, approvalStatus, approvalComments);
    }
    onClose();
  };

  const isViewMode = mode === 'view';
  const isEditMode = mode === 'edit';
  const isApprovalMode = mode === 'approve';

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-auto scrollbar-hide">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            <FileText className="w-5 h-5 text-[#3a58ef]" />
            {isApprovalMode ? 'Review Leave Request' : isEditMode ? 'Edit Leave Request' : 'Leave Request Details'}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Employee Information */}
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center gap-4">
              <Avatar className="w-12 h-12">
                <AvatarImage src={request.avatar} alt={request.staffName} />
                <AvatarFallback>
                  {request.staffName.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold text-lg text-[#101828]">{request.staffName}</h3>
                <p className="text-sm text-[#5d667b]">Employee ID: EMP{request.id.toString().padStart(4, '0')}</p>
              </div>
              <div className="ml-auto">
                <StatusBadge status={request.status} />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {/* Leave Details */}
            <div className="space-y-4">
              <h4 className="font-semibold text-[#101828] flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Leave Details
              </h4>
              
              <div className="space-y-3">
                <div>
                  <Label htmlFor="leave-type">Leave Type</Label>
                  {isEditMode ? (
                    <Select
                      value={editedRequest?.leaveType}
                      onValueChange={(value: LeaveType) => 
                        setEditedRequest(prev => prev ? { ...prev, leaveType: value } : null)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Annual">Annual Leave</SelectItem>
                        <SelectItem value="Sick">Sick Leave</SelectItem>
                        <SelectItem value="Unpaid">Unpaid Leave</SelectItem>
                        <SelectItem value="Personal">Personal Leave</SelectItem>
                        <SelectItem value="Maternity">Maternity Leave</SelectItem>
                        <SelectItem value="Paternity">Paternity Leave</SelectItem>
                      </SelectContent>
                    </Select>
                  ) : (
                    <Input value={request.leaveType} readOnly className="bg-gray-50" />
                  )}
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label htmlFor="start-date">Start Date</Label>
                    {isEditMode ? (
                      <Input
                        type="date"
                        value={editedRequest?.startDate}
                        onChange={(e) => 
                          setEditedRequest(prev => prev ? { ...prev, startDate: e.target.value } : null)
                        }
                      />
                    ) : (
                      <Input value={request.startDate} readOnly className="bg-gray-50" />
                    )}
                  </div>
                  <div>
                    <Label htmlFor="end-date">End Date</Label>
                    {isEditMode ? (
                      <Input
                        type="date"
                        value={editedRequest?.endDate}
                        onChange={(e) => 
                          setEditedRequest(prev => prev ? { ...prev, endDate: e.target.value } : null)
                        }
                      />
                    ) : (
                      <Input value={request.endDate} readOnly className="bg-gray-50" />
                    )}
                  </div>
                </div>

                <div>
                  <Label htmlFor="duration">Duration</Label>
                  <Input value={request.days} readOnly className="bg-gray-50" />
                </div>

                <div>
                  <Label htmlFor="reason">Reason for Leave</Label>
                  {isEditMode ? (
                    <Textarea
                      value={editedRequest?.reason || ''}
                      onChange={(e) => 
                        setEditedRequest(prev => prev ? { ...prev, reason: e.target.value } : null)
                      }
                      placeholder="Please provide a reason for your leave request..."
                      rows={3}
                    />
                  ) : (
                    <Textarea 
                      value={request.reason || 'No reason provided'} 
                      readOnly 
                      className="bg-gray-50" 
                      rows={3} 
                    />
                  )}
                </div>
              </div>
            </div>

            {/* Application Details */}
            <div className="space-y-4">
              <h4 className="font-semibold text-[#101828] flex items-center gap-2">
                <User className="w-4 h-4" />
                Application Details
              </h4>
              
              <div className="space-y-3">
                <div>
                  <Label>Applied Date</Label>
                  <Input 
                    value={request.appliedDate || new Date().toLocaleDateString()} 
                    readOnly 
                    className="bg-gray-50" 
                  />
                </div>

                {request.status !== 'pending' && (
                  <>
                    <div>
                      <Label>Approved By</Label>
                      <Input 
                        value={request.approvedBy || 'HR Manager'} 
                        readOnly 
                        className="bg-gray-50" 
                      />
                    </div>

                    <div>
                      <Label>Manager Comments</Label>
                      <Textarea 
                        value={request.comments || 'No comments'} 
                        readOnly 
                        className="bg-gray-50" 
                        rows={3} 
                      />
                    </div>
                  </>
                )}

                {isApprovalMode && request.status === 'pending' && (
                  <>
                    <div>
                      <Label>Decision</Label>
                      <Select value={approvalStatus} onValueChange={(value: LeaveStatus) => setApprovalStatus(value)}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="approved">Approve</SelectItem>
                          <SelectItem value="rejected">Reject</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label>Comments</Label>
                      <Textarea
                        value={approvalComments}
                        onChange={(e) => setApprovalComments(e.target.value)}
                        placeholder="Add your comments here..."
                        rows={3}
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Leave Balance Information */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-[#101828] mb-3 flex items-center gap-2">
              <CalendarDays className="w-4 h-4" />
              Leave Balance Information
            </h4>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <div className="font-semibold text-[#101828]">15</div>
                <div className="text-[#5d667b]">Annual Available</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-[#101828]">8</div>
                <div className="text-[#5d667b]">Annual Used</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-[#101828]">7</div>
                <div className="text-[#5d667b]">Annual Remaining</div>
              </div>
            </div>
          </div>
        </div>

        <DialogFooter className="gap-2">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          
          {isEditMode && (
            <Button onClick={handleSave} className="bg-[#3a58ef] hover:bg-[#2947dd]">
              Save Changes
            </Button>
          )}
          
          {isApprovalMode && request.status === 'pending' && (
            <Button 
              onClick={handleApproval} 
              className={approvalStatus === 'approved' ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'}
            >
              {approvalStatus === 'approved' ? 'Approve Request' : 'Reject Request'}
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}