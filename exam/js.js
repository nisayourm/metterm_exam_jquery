$(document).ready(function(){
    var url ="https://pixabay.com/api/?key=14001068-da63091f2a2cb98e1d7cc1d82&q=red+flowers&image_type=photo&pretty=true";
    $.ajax({
        dataType:"json",
        url:url,
        success:function(data){
            var result ="";
            data.hits.forEach(element => {

                console.log(element);
                result+=`
                    <div class="col-6">
                    <div class="card">
                    <div class="card shadow-lg mt-4">
    
                        <div class="card-header">
    
                            <button type="button" class="btn btn-primary float-right" data-toggle="modal" data-target="#myModal${element.id}">
                                View
                            </button>
    
                            <img src="${element.userImageURL}" class="rounded-circle"width="50">
                            ${element.user}
                        </div>
    
                        <div class="card-body">
                            <img src="${element.largeImageURL}"class="img-fluid">
                        </div>
    
    
    
                       
                    
                      <div class="modal fade" id="myModal${element.id}">
                        <div class="modal-dialog">
                          <div class="modal-content">
                          
                            <div class="modal-header">
                            <img src="${element.userImageURL}" class="rounded-circle"width="50">
                            ${element.user}
                              <button type="button" class="close" data-dismiss="modal">&times;</button>
                            </div>
                            
                            <div class="modal-body">
                            <img src="${element.largeImageURL}"class="img-fluid">
    
                            <ul class="list-group list-group-horizontal">
                                    <br>
                                <li class="list-group-item">
                                <i class="material-icons float-left text-primary">thumb_up</i>
                                ${element.likes}
                                    &nbsp;
                                </li>
    
                                <li class="list-group-item">
                                <i class="material-icons float-left text-success">comments</i>
                                ${element.comments}
                                &nbsp;
                                </li>
    
                                <li class="list-group-item">
                                <i class="material-icons float-left text-info">favorites</i>
                                ${element.favorites}
                                &nbsp;
                                </li>
    
                                <li class="list-group-item ">
                                <i class="material-icons float-left text-info">thumb_up</i>
                                ${element.views}
                                &nbsp;
                                </li>
    
                               
                            </ul>
                            </div>
                            
                           
                            
                          </div>
    
                            
                        </div>
                      </div>
                      
                    </div>
                    </div>
                    </div>
                `;
                
            });

            $('#card').append(result);
        }
    });
});