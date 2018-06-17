var app = angular.module('ectdApp')
.controller('DossierDetailsController', ['$stateParams', '$log', 'DossierService', 'NotificationService', 
    function($stateParams, $log, DossierService, notifications){

        var self = this;
        self.dossierId = $stateParams.dossierId;
        self.title = 'Loading Dossier Details...';

        DossierService.getDossierById(this.dossierId, function(err, result){
            if(err){
                notifications.addAlert('Error in retrieving dossier data. Please contact administartor.', 'danger');
            }
            else {
                self.title = createTitle(result.dossier);
                self.createDossierDisplayObj(result.dossier);
                self.createDossierTree(result.folderTree);
                self.selectedFolder = result.dossier.Title;
            }
        });

        function createTitle(dossier){
            return dossier.ProductBrandName + "(" + dossier.ProductGenericName + ")";
        }

        self.createDossierTree = function(folderTree){

            self.treeData = folderTree;

            self.treeConfig = {
                core: {
                    error : function(error) {
                        console.error(error);
                    },
                    check_callback : function (operation, node, node_parent, node_position, more) {
                        return true;
                    }
                },
                plugins: ['state']
            };

            self.applyModelChanges = function(){
                return true;
            };
            self.readyCB = function(){
                $log.info("Js Tree is ready");
            };
            self.createNodeCB = function(e, created) {
                $log.info('Created Node: ', created);
            };     
            self.selectNodeCB = function(e, selected) {
                if(selected.node.original.type == 'file'){
                    var file = selected.node;
                    $log.info('Selected File: ');
                }
                else {
                    self.selectedFolder = selected.node.text;
                }
            };
            self.treeEventsObj = {
                'ready': self.readyCB,
                'create_node': self.createNodeCB,
                'select_node': self.selectNodeCB   // on node selected callback
            }; 
        }

        self.addNewNode = function(id){
            self.treeData.push({ id : id, parent : 'ajson3', text : 'File 1' , 'icon': 'jstree-file' });
        }

        self.createDossierDisplayObj = function(dossierData){
            self.dossier = {
                'Title' : dossierData.Title,
                'Description': dossierData.Description,
                'Region': dossierData.Region,
                'Application Type': dossierData.ApplicationType,
                'eCTD Version': dossierData.EctdVersion,
                'Dosage Form': dossierData.DosageForm,
                'Applicant' : dossierData.Applicant,
                'Due Date': DossierService.dateToDisplay(dossierData.DueDate),
                'Date Created': DossierService.dateToDisplay(dossierData.DateCreated),
                'Date Modified': DossierService.dateToDisplay(dossierData.DateModified),
                'Drug Product Brand Name': dossierData.ProductBrandName,
                'Drug Product Generic Name': dossierData.ProductGenericName,
                'Drug Product Manufacturer': dossierData.ProductManufacturer,
                'ATC Code': dossierData.AtcCode
            };
            self.dossierKeys = Object.keys(self.dossier);
        }


}]);